import { PlayerData } from "./data.js";
import { LoadPlayers } from "./index.js";

document.querySelector("input").addEventListener("keyup", function () {
    var Result = [];
    var Search = this.value.toLowerCase().replaceAll(" ", "");
    for (const index in PlayerData) {
        var PlayerName = PlayerData[index].FullName.toLowerCase().replaceAll(" ", "");
        if (PlayerName.includes(Search)) {
            Result.push(PlayerData[index]);
        }
    }
    LoadPlayers(Result, document.querySelector(".players"));
    if (!Result.length) {
        document.querySelector(".players").innerHTML +=
            `<div class="flex heading"><h2>${Search.length > 10 ? Search.slice(Search.length - 10) : Search} Not Found<span></span></h2></div>`;
    }
});

LoadPlayers(PlayerData.sort(() => Math.random() - 0.5), document.querySelector(".players"), 10);