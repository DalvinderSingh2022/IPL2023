import { PlayerData, TeamInfo } from "./data.js";

export function sortPlayers() {
    PlayerData.sort((a, b) => {
        if (a.FullName < b.FullName) return -1;
        if (a.FullName > b.FullName) return 1;
        return 0;
    });
}

export function sortTeams() {
    TeamInfo.sort((a, b) => {
        if (a.Team() < b.Team()) return -1;
        if (a.Team() > b.Team()) return 1;
        return 0;
    });
}

export function SortList(keys, order = true, Team = "all") {
    sortPlayers();
    var list = [];
    for (const key in keys) {
        list = PlayerData.sort((a, b) => { return order ? (b[keys[key]]() - a[keys[key]]()) : (a[keys[key]]() - b[keys[key]]()) });
    }
    return list.filter((a) => { return a[keys[keys.length - 1]]() })
        .filter((a) => { return a.TeamLogo == Team || Team == "all"; });
}

export function teamProfileEvent(buttons) {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].onclick = (e) => {
            localStorage.setItem("profileTeam", JSON.stringify(e.target.innerText));
            location.assign("teamprofile.html");
        }
    }
}

export function playerProfileEvent(buttons) {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].onclick = (e) => {
            localStorage.setItem("profileplayer", JSON.stringify(e.target.innerText));
            location.assign("playerprofile.html");
        }
    }
}

export function activeButton(button, Buttons) {
    for (var index = 0; index < Buttons.length; index++) {
        if (Buttons[index] == button) {
            Buttons[index].classList.add("active");
        } else {
            Buttons[index].classList.remove("active");
        }
    }
}

export function LoadPlayers(list, Parent, Length = list.length) {
    Parent.innerHTML = "";
    for (let index = 0; index < Length; index++) {
        const player = document.createElement("div");
        var html = "";
        html += `
        <span class="player-name text-center pointer">${list[index].FullName}</span>
            <div class="flex col logos">`;
        if (list[index].IsCaptain()) html += `<span class="flex inner"><i class="fa-solid fa-c"></i></span>`;
        if (!list[index].IsIndian()) html += `<span class="flex inner"><i class="fa-solid fa-plane-up"></i></span>`;
        if (list[index].IsKeeper()) html += `<span class="flex inner"><i class="fa-solid fa-mitten"></i></span>`;
        html += `
            </div>
        <img class="team-img" src='${list[index].TeamImage().src}'/>
        <img class="player-img" src="${list[index].Image}"/>`;
        player.innerHTML = html;
        player.classList = `team ${list[index].TeamLogo} box flex`;
        player.querySelector(".player-img").onerror = () => {
            player.querySelector(".player-img").src = defaultImage;
        }
        Parent.append(player);
    };
    const playerBtns = Parent.querySelectorAll(".player-name");
    playerProfileEvent(playerBtns);
};

export function Loadperformer(keys, order = true, type, team = "all") {
    const player = SortList(keys, order, team)[0];
    const performer = document.createElement("div");
    performer.innerHTML = `
        <img class="team-image" src="${player.TeamImage().round.src}">
        <img class="player-image" src="${player.Image}">
        <h4 class="flex inner text-center performance">${type}</h4>
        <div class="flex data col">
            <h2 class="pointer player-name">${player.FullName}</h2>
            <h1>${player[keys[keys.length - 1]]()}</h1>
            <h4>${keys[keys.length - 1]}</h4>
            <a href="stats.html">View List</a>
        </div>`;
    performer.classList = `wrapper flex team ${player.TeamLogo}`;
    performer.querySelector(".player-image").onerror = () => {
        performer.querySelector(".player-image").src = defaultImage;
    }

    document.querySelector(".performers").append(performer);
    const playerBtns = document.querySelector(".performers").querySelectorAll(".player-name");
    playerProfileEvent(playerBtns);
};

export function secondNav() {
    for (const index in TeamInfo) {
        const option = document.createElement("div");
        option.innerHTML = `<img src=${TeamInfo[index].Image.round.src} class="pointer">`;
        option.classList = "team-box bottom";
        option.querySelector("img").onclick = (e) => {
            for (const i in TeamInfo) {
                if (e.target.src.includes(TeamInfo[i].Image.round.src)) {
                    localStorage.setItem("profileTeam", JSON.stringify(TeamInfo[i].Team()));
                    location.assign("teamprofile.html");
                }
            }
        }
        document.querySelector(".second").appendChild(option);
    }
}

export const defaultImage = "https://www.iplt20.com/assets/images/default-headshot.png";

(() => {
    const menuBtn = document.querySelector(".menu");
    menuBtn.onclick = () => {
        document.querySelector(".header").classList.toggle("active");
        menuBtn.querySelector("i").classList.toggle("fa-bars");
        menuBtn.querySelector("i").classList.toggle("fa-xmark");
    }
})();

(() => {
    window.addEventListener("load", () => {
        document.querySelector(".loading").classList.add("hide");
        document.querySelector("body").style.overflow = "auto";
    })
})();

sortPlayers();
sortTeams();