import { PlayerData } from "./data.js";
import {activeButton, defaultImage, SortList } from "./index.js";

const currentPlayer = function () {
    for (const index in PlayerData) {
        if (JSON.stringify(PlayerData[index].FullName) == localStorage.getItem("profileplayer")) {
            return PlayerData[index];
        }
    }
}
document.title = `IPL2023 | ${currentPlayer().TeamLogo.toUpperCase()} | ${currentPlayer().FullName}`;
const container = document.querySelector(".container");
var html = "";
var rank = {};
var bio = {
    Nationality: currentPlayer().IsIndian() ? "Indian" : "Overseas",
    Role: currentPlayer().Role.replace("india","").replace("captain",""),
    Team: currentPlayer().Team()
};

rank.Runs = getRank(SortList(["Runs"]));
rank.StrikeRate = getRank(SortList(["StrikeRate"]));
rank.Wicket = getRank(SortList(["Wicket"]));
rank.BattingAvg = getRank(SortList(["BattingAvg"]));
rank.Sixes = getRank(SortList(["Sixes"]));
rank.HighestScore = getRank(SortList(["HighestScore"]));
rank.BowlingAvg = getRank(SortList(["BowlingAvg"]));
rank.Economy = getRank(SortList(["Economy"]));
function getRank(list) {
    for (const index in list) {
        if (currentPlayer().FullName == list[index].FullName) {
            return parseInt(index) + 1;
        }
    }
}

html += `
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
if (currentPlayer().Matches.length) {
    html += 
    `<div class="group flex j-between nowrap head">
        <h2>Ranks</h2>
    </div>`;
}
for (const key in rank) {
    if (Object.hasOwnProperty.call(rank, key) && rank[key]) {
        html += `
        <div class="group flex j-between nowrap">
            <h2>${key}</h2>
            <span class="flex rank-${rank[key]}">${rank[key] > 3 ? rank[key] : `<i class="fa-solid fa-medal"></i>`}</span>
        </div>`;
    }
}
html += `</div>`;
container.innerHTML = html;
container.querySelector(".player-img").onerror = () => {
    container.querySelector(".player-img").src = defaultImage;
}
for (const index in currentPlayer().Matches) {
    document.querySelector(".options").innerHTML +=
        `<button class="bottom" data-match="${parseInt(index)}">Match ${parseInt(index) + 1}</button>`;
    const Buttons = document.querySelectorAll(".options button");
    for (let index = 0; index < Buttons.length; index++) {
        Buttons[index].onclick = () => {
            activeButton(Buttons[index], Buttons);
            loadStats(Buttons[index].getAttribute("data-match"));
        }
    }
}

function loadStats(match) {
    var html = "";
    var stats = match >= 0 ? {
        Runs: currentPlayer().Matches[match].Runs || 0,
        StrikeRate: currentPlayer().Matches[match].StrikeRate(),
        Sixes: currentPlayer().Matches[match].Sixes || 0,
        Wicket: currentPlayer().Matches[match].Wicket || 0,
        Economy: currentPlayer().Matches[match].Economy(),
        BallsBowled: currentPlayer().Matches[match].BallsBowled || 0,
        Ballsfaced: currentPlayer().Matches[match].Ballsfaced || 0,
        RunsGiven: currentPlayer().Matches[match].RunsGiven || 0,
    } : {
        Runs: currentPlayer().Runs(),
        StrikeRate: currentPlayer().StrikeRate(),
        BattingAvg: currentPlayer().BattingAvg(),
        Sixes: currentPlayer().Sixes(),
        HighestScore: currentPlayer().HighestScore(),
        Wicket: currentPlayer().Wicket(),
        Economy: currentPlayer().Economy(),
        BowlingAvg: currentPlayer().BowlingAvg(),
        BBM: currentPlayer().BBM(),
        Ballsfaced: currentPlayer().Ballsfaced(),
        BallsBowled: currentPlayer().BallsBowled(),
        RunsGiven: currentPlayer().RunsGiven(),
        Fifties: currentPlayer().Fifties(),
        Hundreds: currentPlayer().Hundreds(),
        Fifers: currentPlayer().Fifers(),
        BowlingStrike: currentPlayer().BowlingStrike()
    };
    for (const key in stats) {
        if (Object.hasOwnProperty.call(stats, key)) {
            html += `
            <div class="group flex j-between nowrap">
                <h2>${key}</h2>
                <span class="flex inner">${stats[key]}</span>
            </div>`;
        }
    }
    document.querySelector(".data").innerHTML = html;
}
loadStats(document.querySelectorAll(".options button")[0].getAttribute("data-match"));