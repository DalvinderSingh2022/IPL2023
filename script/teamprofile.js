import { TeamInfo, loadData } from "./data.js";
import { LoadPlayers, Loadperformer, secondNav} from "./index.js";
loadData();

const currentTeam = function () {
    for (const index in TeamInfo) {
        if (JSON.stringify(TeamInfo[index].Team) == localStorage.getItem("profileTeam")) {
            return TeamInfo[index];
        }
    }
}
document.title = "IPL2023 | " + currentTeam().Team;
const container = document.querySelector(".container");
var position;

secondNav();
document.querySelectorAll(".second img").forEach(image => {
    if (image.src == currentTeam().Image().round.src) {
        image.parentElement.classList.add("active");
    }
})

TeamInfo.sort((a, b) => { return b.Nrr - a.Nrr }).sort((a, b) => { return b.Points - a.Points });
for (const index in TeamInfo) {
    if (TeamInfo[index].Team == currentTeam().Team) {
        position = parseInt(index) + 1;
    }
}

var html = `
<div class="team-logo team ${currentTeam().Logo} flex">
    <img src="${currentTeam().Image().round.src}">
</div>
    <div class="info flex col">
        <h2 class="header bottom active">${currentTeam().Team}</h2>
        <div class="flex table j-evenly">
            <div class="flex col inner group">
                <h3>${position}</h3>
                <h3>Position</h3>
            </div>
            <div class="flex col inner group">
                <h3>${currentTeam().Played}</h3>
                <h3>Matches</h3>
            </div>
            <div class="flex col inner group">
                <h3>${currentTeam().Points}</h3>
                <h3>Points</h3>
            </div>
        </div>
        <div class="flex table j-start col">
            <h3>Last Matches</h3>
            <div class="flex inner">`;

for (const index in currentTeam().Form) {
    if (currentTeam().Form[index] == "W") {
        html += `<span class="won flex inner"><i class="fa-solid fa-w"></i></span>`;
    } else if (currentTeam().Form[index] == "L") {
        html += `<span class="lose flex inner"><i class="fa-solid fa-l"></i></span>`;
    } else {
        html += `<span class="draw flex inner"><i class="fa-solid fa-x"></i></span>`;
    }
}

html += `</div>
        </div>
        <div class="flex trophy nowrap"><i class="fa-solid fa-trophy"></i>${currentTeam().ChampionsIn().replaceAll(",", " ")}</div>
    </div>`;
container.innerHTML = html;

LoadPlayers(currentTeam().Squad(), document.querySelector(".squad"));

Loadperformer(["BattingAvg", "Runs"], true, "Most Runs", currentTeam().Logo);
Loadperformer(["Runs", "StrikeRate"], true, "Best StrikeRate", currentTeam().Logo);
Loadperformer(["Runs", "BattingAvg"], true, "Best Average", currentTeam().Logo);
Loadperformer(["StrikeRate", "Sixes"], true, "Most Sixes", currentTeam().Logo);
Loadperformer(["BattingAvg", "Fours"], true, "Fours", currentTeam().Logo);
Loadperformer(["BattingAvg", "HighestScore"], true, "HighestScore", currentTeam().Logo);
Loadperformer(["Economy", "Wicket"], true, "Most Wickets", currentTeam().Logo);
Loadperformer(["BallsBowled", "Economy"], false, "Best Economy", currentTeam().Logo);
Loadperformer(["BallsBowled", "BowlingAvg"], false, "Best BowlingAvg", currentTeam().Logo);
Loadperformer(["Economy", "Maidens"], true, "Best Maidens", currentTeam().Logo);