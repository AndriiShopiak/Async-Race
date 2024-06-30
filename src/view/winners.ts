import api from "../api/api"
const winApi = new api();

export default function winnersCars() {
    const viewBtn: HTMLElement = document.querySelector("#toWinners");
    viewBtn.addEventListener("click", () => {
        winApi.getWinners("http://127.0.0.1:3000/winners").then((val) => {
          if (!document.querySelector(".winners_con")) {
            document.querySelector(".winner__block").innerHTML += `
            <div class="winners_con">
              <div class="close_icon_con">
                <img src="../assets/img/2.png" alt="closeIcon" class="winners_con_close_btn">
              </div>
              <h2 class="winners_con__title">Winners</h2>
              <div class="winners_con_head">
                <div>№</div>
                <div>Name</div>
                <div>Wins</div>
                <div>Time</div>
              </div>
              <div class="winners_con_body">
                <div>${val[0].id}</div>
                <div>Tesla</div>
                <div>${val[0].wins}</div>
                <div>${val[0].time}</div>
              </div>
            </div>
          `;
          document.querySelector(".winners_con_close_btn").addEventListener("click", () => {
            document.querySelector(".winner__block").innerHTML = "";
          });
        }
        });
      });
}