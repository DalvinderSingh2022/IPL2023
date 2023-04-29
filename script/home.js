import { PlayerData, TeamInfo, loadData } from "./data.js";
import { Loadperformer, activeButton, sortTeams, LoadPlayers, Loadmatches } from "./index.js";
loadData();

const Buttons = document.querySelectorAll(".winner button");
var background = Math.floor(Math.random() * TeamInfo.length);
var captains = [];
var total = {
    Runs: 0,
    Sixes: 0,
    Fours : 0,
    Fifties: 0,
    Hundreds: 0,
    Wicket: 0,
    BallsBowled: 0,
    Fifers: 0,
    Maidens: 0,
    Teams: TeamInfo.length,
}

function LoadTeam(team, data) {
    const Team = document.createElement("div");
    Team.classList = "box flex";
    Team.innerHTML = `
        <div class="flex col logos">
            <span class="team ${team.Logo} flex inner">${data}</span>
        </div>
        <img class="team ${team.Logo} team-img" src="${team.Image().round.src}">`;
    document.querySelector(".winner .stat").append(Team);
}

for (let index = 0; index < Buttons.length; index++) {
    Buttons[index].onclick = (e) => {
        activeButton(e.target, Buttons);
        sortTeams();
        const keys = e.target.getAttribute("data-sort");
        const list = TeamInfo.sort((a, b) => { return b[keys]() - a[keys]() });
        document.querySelector(".winner .stat").innerHTML = "";
        for (const index in list) {
            LoadTeam(list[index], list[index][keys]());
        }
    }
}

Buttons[0].click();

for (const index in PlayerData) {
    total.BallsBowled += PlayerData[index].BallsBowled();
    total.Runs += PlayerData[index].Runs();
    total.Sixes += PlayerData[index].Sixes();
    total.Fours += PlayerData[index].Fours();
    total.Wicket += PlayerData[index].Wicket();
    total.Fifties += PlayerData[index].Fifties();
    total.Fifers += PlayerData[index].Fifers();
    total.Hundreds += PlayerData[index].Hundreds();
    total.Maidens += PlayerData[index].Maidens();
}

for (const key in total) {
    if (background > TeamInfo.length - 1) background = 0;
    var html = `
        <div class="wrapper box flex col team j-evenly ${TeamInfo[background++].Logo}">
            <h1>${total[key]}</h1>
            <h3>${key}</h3>
        </div>`;
    document.querySelector(".numbers").innerHTML += html;
}

sortTeams();
for (const index in TeamInfo) {
    captains.push(TeamInfo[index].Captain());
};
LoadPlayers(captains, document.querySelector(".captains"));

Loadperformer(["BattingAvg", "Runs"], true, "Most Runs");
Loadperformer(["Runs", "StrikeRate"], true, "Best StrikeRate");
Loadperformer(["Runs", "BattingAvg"], true, "Best Average");
Loadperformer(["StrikeRate", "Sixes"], true, "Most Sixes");
Loadperformer(["BattingAvg", "Fours"], true, "Fours");
Loadperformer(["BattingAvg", "HighestScore"], true, "HighestScore");
Loadperformer(["Economy", "Wicket"], true, "Most Wickets");
Loadperformer(["BallsBowled", "Economy"], false, "Best Economy");
Loadperformer(["BallsBowled", "BowlingAvg"], false, "Best BowlingAvg");
Loadperformer(["Economy", "Maidens"], true, "Best Maidens");
Loadperformer(["BBM"], true, "Best Figures");

Loadmatches(JSON.parse(localStorage.getItem("ipl2023matches")));