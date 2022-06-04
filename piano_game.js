const audio = document.getElementById("audio");
const ply = document.getElementById("play");
const out = document.getElementById("out");
const results = document.getElementById("result");

audio.play();

document.querySelector(".score").style.display = "none";

let n = 0;
let score = 0;
let loop_break = false;

document.querySelector(".start").addEventListener("click", () => {
    document.querySelector(".score").style.display = "none";

    n = 0;
    score = 0;
    loop_break = false;

    //checks if the user clicks the correct tile

    function check(event) {
        let id = event.target.id;
        setTimeout(() => {
            for(let a = 0; a < sub_array.length; a++) {
                document.getElementById(sub_array[a]).classList.remove("blink");
            }
        },1000);

        if(id == shuffled_arr[35]) {
            score++;
            document.querySelector(".score").style.display = "block";
            document.getElementById("score-display").innerHTML = score;
            loop_break = true;
            audio.pause();
            out.play();
            results.play();
        } else if(id != shuffled_arr[n]) {
            document.querySelector(".score").style.display = "block";
            document.getElementById("score-display").innerHTML = score;
            loop_break = true;
            audio.pause();
            out.play();
            results.play();
        } else {
            score++;
            blink();
        }
        n++;

        ply.play();

        console.log(`SCORE: ${score}`);
    }

    //creates 6 x 6 table with cells having ids as 0,1,2,....,35

let table, tr, td;

table = document.createElement("table");

for(let i = 0; i < 6; i++) {
    tr = document.createElement("tr");

    for(let j = 0; j < 6; j++) {
        td = document.createElement("td");
        td.id = (i * 6 + j);
        td.innerHTML = "";
        td.onclick = check;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

//shuffles the array containing ids in random order every time and store the sequence in an array in which tiles should blink
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
let shuffled_arr = null;

function shuffle(array) {
    shuffled_arr = array.sort(() => Math.random() - 0.5);
    console.log(shuffled_arr);
}

shuffle(arr);
//previous round tiles + another random tile gets blinked
let sub_array = [];
let k = 0;

function blink() {
    sub_array.push(shuffled_arr[k]);
    for(let i = 0; i < sub_array.length; i++) {
        document.getElementById(sub_array[i]).classList.add("blink");
    }
    k++;
}


if(loop_break != true) {
    blink();
}
}
);