import { TeamInfo } from "./data.js";
import { playerProfileEvent, activeButton, SortList, defaultImage } from "./index.js";

const table = document.querySelector("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");
const Buttons = document.querySelectorAll(".options button:not(.teams button, .dropdown>button)");
const teamBtn = document.querySelector(".options .team-btn");
const moreBtn = document.querySelector(".more");
var SelectedTeam = "all";
var playerLength;
var lastButton;

function changeHeading(Parent, text) {
    const battingBtn = document.querySelector(".options .batting-btn");
    const bowlingBtn = document.querySelector(".options .bowling-btn");
    Parent.innerText = text;
    if (Parent == bowlingBtn) battingBtn.innerText = "Batting Stats";
    if (Parent == battingBtn) bowlingBtn.innerText = "Bowling Stats";
}

function LoadTableHead(type, data) {
    (data.length) ? tableHead.innerHTML = `<tr><th>Player</th><th>Name</th><th>${type}</th></tr>`
        : tableHead.innerHTML = `<tr><th class="empty">No Data Available</th></tr>`;
    tableBody.innerHTML = "";
    table.append(tableHead, tableBody);
};

function LoadTableRow(player, stat, rank) {
    const row = document.createElement("tr");
    var html = "";
    html = `<td>
                <img src="${player.Image}">`;
    html += (rank > 2) ? `<span class="flex rank">${parseInt(rank) + 1}</span>` : `<span class="flex rank rank-${parseInt(rank) + 1}"><i class="fa-solid fa-medal"></i></span>`;
    html += `</td>
        <td class="pointer player-name">${player.FullName}</td>
        <td>${stat}</td>`;
    row.innerHTML = html;
    row.querySelector("img").onerror = () => {
        row.querySelector("img").src = defaultImage;
    }
    tableBody.append(row);
    const playerBtns = table.querySelectorAll(".player-name");
    playerProfileEvent(playerBtns);
}

for (let index = 0; index < Buttons.length; index++) {
    Buttons[index].onclick = (e) => {
        activeButton(e.target, Buttons);
        changeHeading(e.target.parentElement.parentElement.querySelector(".btn"), e.target.innerText);
        const keys = e.target.getAttribute("data-sort").split(" ");
        if (e.target != lastButton) playerLength = 0;
        const list = SortList(keys, SelectedTeam).slice(0, playerLength + 10);
        if (SortList(keys, SelectedTeam).length <= playerLength + 10) {
            moreBtn.style.display = "none";
        } else {
            moreBtn.style.display = "block";
        };
        lastButton = e.target;
        LoadTableHead(keys[keys.length - 1], list);
        for (const index in list) {
            LoadTableRow(list[index], list[index][keys[keys.length - 1]](), index);
        }
    }
}

for (const index in TeamInfo) {
    document.querySelector(".teams").innerHTML += `
    <button class="bottom" data-team="${TeamInfo[index].Logo}">${TeamInfo[index].Team}</button>`;
}
const TeamButtons = document.querySelectorAll(".teams button");
TeamButtons.forEach(button => {
    button.onclick = () => {
        activeButton(button, TeamButtons);
        changeHeading(teamBtn, button.getAttribute("data-team").toUpperCase());
        SelectedTeam = button.getAttribute("data-team");
        playerLength = 0;
        lastButton.click();
    }
});

moreBtn.addEventListener("click", () => {
    playerLength = playerLength + 10;
    lastButton.click();
})

Buttons[0].click();