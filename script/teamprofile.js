import { PlayerData, TeamInfo } from "./data.js";
import { LoadPlayers, Loadperformer, secondNav, } from "./index.js";

const currentTeam = function () {
    for (const index in TeamInfo) {
        if (JSON.stringify(TeamInfo[index].Team()) == localStorage.getItem("profileTeam")) {
            return TeamInfo[index];
        }
    }
}
document.title = "IPL2023 | " + currentTeam().Team();
const container = document.querySelector(".container");
var html = "";
var squad = [];
var position = 0;

secondNav();
document.querySelectorAll(".second img").forEach(image => {
    if (image.src == currentTeam().Image.round.src) {
        image.parentElement.classList.add("active");
    }
})

TeamInfo.sort((a, b) => { return b.Points() - a.Points() });
for (const index in TeamInfo) {
    if (TeamInfo[index].Team() == currentTeam().Team()) {
        position = parseInt(index) + 1;
    }
}

PlayerData.sort((a, b) => { return a.Matches.length - b.Matches.length });
for (const index in PlayerData) {
    if (PlayerData[index].TeamLogo == currentTeam().Logo) {
        squad.push(PlayerData[index]);
    }
}

html += `
<div class="team-logo team ${currentTeam().Logo} flex">
    <img src="${currentTeam().Image.round.src}">
</div>
    <div class="info flex col">
        <h2 class="header bottom active">${currentTeam().Team()}</h2>
        <div class="flex table j-evenly">
            <div class="flex col inner group">
                <h3>${position}</h3>
                <h3>Position</h3>
            </div>
            <div class="flex col inner group">
                <h3>${currentTeam().Played()}</h3>
                <h3>Matches</h3>
            </div>
            <div class="flex col inner group">
                <h3>${currentTeam().Points()}</h3>
                <h3>Points</h3>
            </div>
        </div>
        <div class="flex table j-start col">
            <h3>Last Matches</h3>
            <div class="flex inner">`;

for (const index in currentTeam().Matches) {
    if (currentTeam().Matches[index] == 1) {
        html += `<span class="won flex inner"><i class="fa-solid fa-l"></i></span>`;
    } else if (currentTeam().Matches[index] == -1) {
        html += `<span class="lose flex inner"><i class="fa-solid fa-w"></i></span>`;
    } else if (currentTeam().Matches[index] == 0) {
        html += `<span class="draw flex inner"><i class="fa-solid fa-x"></i></span>`;
    }
}

html += `</div>
        </div>
        <div class="flex trophy nowrap"><i class="fa-solid fa-trophy"></i>${currentTeam().ChampionsIn.replaceAll(",", " ")}</div>
    </div>`;
container.innerHTML = html;

LoadPlayers(squad, document.querySelector(".squad"));

Loadperformer(["BattingAvg", "Runs"], true, "Most Runs", currentTeam().Logo);
Loadperformer(["Runs", "StrikeRate"], true, "Best StrikeRate", currentTeam().Logo);
Loadperformer(["Economy", "Wicket"], true, "Most Wickets", currentTeam().Logo);
Loadperformer(["BallsBowled", "Economy"], false, "Best Economy", currentTeam().Logo);