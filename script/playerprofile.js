import { PlayerData } from "./data.js";
import { activeButton, defaultImage, SortList } from "./index.js";

const currentPlayer = function () {
    for (const index in PlayerData) {
        if (JSON.stringify(PlayerData[index].FullName) == localStorage.getItem("profileplayer")) {
            return PlayerData[index];
        }
    }
}
document.title = `IPL2023 | ${currentPlayer().TeamLogo.toUpperCase()} | ${currentPlayer().FullName}`;

const container = document.querySelector(".container");
var bio = {
    Nationality: currentPlayer().IsIndian() ? "Indian" : "Overseas",
    Role: currentPlayer().Role.replace("india", "").replace("captain", ""),
    Team: currentPlayer().Team()
};
var html = `
<div class="box team-logo team ${currentPlayer().TeamLogo} flex">
    <img src=${currentPlayer().Image} class="flex inner player-img">
    <span class="player-name text-center">${currentPlayer().FullName}</span>
    <div class="flex col logos">
        <span class="flex inner team-image"><img src="${currentPlayer().TeamImage().round.src}"/></span>`;
if (currentPlayer().IsCaptain()) html += `<span class="flex inner"><i class="fa-solid fa-c"></i></span>`;
if (!currentPlayer().IsIndian()) html += `<span class="flex inner"><i class="fa-solid fa-plane-up"></i></span>`;
if (currentPlayer().IsKeeper()) html += `<span class="flex inner"><i class="fa-solid fa-mitten"></i></span>`;
html += `
    </div>
</div>
<div class="info flex col j-start nowrap">`;
for (const key in bio) {
    if (Object.hasOwnProperty.call(bio, key) && bio[key]) {
        html += `
        <div class="group flex nowrap">
            <h2>${bio[key]}</h2>
        </div>`;
    }
}
html += `</div>`;
container.innerHTML = html;
container.querySelector(".player-img").onerror = () => {
    container.querySelector(".player-img").src = defaultImage;
}

function loadRanks() {
    const getRank = (list) => {
        for (const index in list) {
            if (currentPlayer().FullName == list[index].FullName) {
                return parseInt(index) + 1;
            }
        }
    }
    var html = "";
    var rank = {
        Runs: getRank(SortList(["Runs"])),
        StrikeRate: getRank(SortList(["StrikeRate"])),
        Wicket: getRank(SortList(["Wicket"])),
        BattingAvg: getRank(SortList(["BattingAvg"])),
        Sixes: getRank(SortList(["Sixes"])),
        HighestScore: getRank(SortList(["HighestScore"])),
        BowlingAvg: getRank(SortList(["BowlingAvg"])),
        Economy: getRank(SortList(["Economy"])),
        Fours: getRank(SortList(["Fours"])),
        Maidens: getRank(SortList(["Maidens"])),
    }
    for (const key in rank) {
        if (Object.hasOwnProperty.call(rank, key)) {
            html += `
            <div class="group flex j-between nowrap">
                <h2>${key}</h2>
                <span class="flex inner">${rank[key] || 0}</span>
            </div>`;
        }
    }
    document.querySelector(".ranks .data").innerHTML = html;
}

function loadStats(match) {
    var html = "";
    if (match >= 0) {
        for (const key in currentPlayer().Matches[match]) {
            if (key != "Id" && Object.hasOwnProperty.call(currentPlayer().Matches[match], key)) {
                html +=
                    `<div class="group flex j-between nowrap">
                        <h2>${key}</h2>
                        <span class="flex inner">${currentPlayer().Matches[match][key]}</span>
                    </div>`;
            }
        }
    } else {
        Object.getOwnPropertyNames(Object.getPrototypeOf(currentPlayer()))
            .filter(key => key != "constructor" && key != "updateBatStats" && key != "updateBowlStats" && key != "matchIndex" && key != "getMatches" && key != "HsRuns" && key != "HsNotout" && key != "Team")
            .filter(key => typeof (currentPlayer()[key]) == 'function' && (typeof (currentPlayer()[key]()) == "number" || typeof (currentPlayer()[key]()) == "string"))
            .map(key => {
                html += `<div class="group flex j-between nowrap">
                            <h2>${key}</h2>
                            <span class="flex inner">${currentPlayer()[key]()}</span>
                        </div>`;
            })
    }
    document.querySelector(".stats .data").innerHTML = html;
}

for (const index in currentPlayer().Matches) {
    document.querySelector(".stats .options").innerHTML +=
        `<button class="bottom" data-match="${index}">Match ${1 + Number(index)}</button>`;
    const Buttons = document.querySelectorAll(".options button");
    for (let index = 0; index < Buttons.length; index++) {
        Buttons[index].onclick = () => {
            activeButton(Buttons[index], Buttons);
            loadStats(Buttons[index].getAttribute("data-match"));
        }
    }
}
loadStats(document.querySelectorAll(".options button")[0].getAttribute("data-match"));
loadRanks();