import { TeamInfo } from "./data.js";
import { secondNav, sortTeams } from "./index.js";

const tbody = document.querySelector("tbody");

secondNav();
sortTeams();
TeamInfo.sort((a, b) => { return b.Points() - a.Points() }).sort((a, b) => { return b.Nrr - a.Nrr });

for (const index in TeamInfo) {
    const teamTable = document.createElement("tr");
    teamTable.innerHTML = ` 
    <td>
        <img src="${TeamInfo[index].Image.round.src}">
        <span class="team flex rank ${(TeamInfo[index].Qualified) ? "qualified" : ""}">${TeamInfo[index].Qualified ? `<i class="fa-solid fa-q"></i>` : parseInt(index) + 1}</span>
    </td>
    <td>${TeamInfo[index].Played()}</td>
    <td>${TeamInfo[index].Won()}</td>
    <td>${TeamInfo[index].Lose()}</td>
    <td>${TeamInfo[index].Draw()}</td>
    <td>${TeamInfo[index].Points()}</td>
    <td>${TeamInfo[index].Nrr}</td>`;
    tbody.appendChild(teamTable);
}