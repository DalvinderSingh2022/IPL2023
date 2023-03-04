import { TeamInfo } from "./data.js";
import { teamProfileEvent } from "./index.js";

const teamsInfoEl = document.querySelector(".teams-info");

for (const index in TeamInfo) {
    const team = document.createElement("div");
    team.innerHTML = `
    <span class="player-name text-center pointer">${TeamInfo[index].Team()}</span>
    <img src="${TeamInfo[index].Image.round.src}" class="team-img">`;
    team.classList = `box flex team ${TeamInfo[index].Logo}`;
    teamsInfoEl.appendChild(team);

    const teamBtns = document.querySelectorAll(".player-name");
    teamProfileEvent(teamBtns);
};