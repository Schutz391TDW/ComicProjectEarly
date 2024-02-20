// JavaScript Document
//Array containing names and images to compare
const comics = [ 
    {"name": "venomize",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/7/00/5ac5259b70f99/detail.jpg",
    },
    {"name": "x-blue",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/b/a0/5ac525af15ba4/detail.jpg",
    },
    {"name": "rising",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/5ac5242c1515d/detail.jpg",
    },
    {"name": "gauntlet",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/6/b0/5ac523df25499/detail.jpg",
    },
    {"name": "thanos",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/9/70/5ac5243e8ee80/detail.jpg",
    },
    {"name": "thor",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/8/d0/5abc031296f2d/detail.jpg",
    },
    {"name": "infin",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/d/40/523211c544696/detail.jpg",
    },
    {"name": "panther",
    "img": "https://i.annihil.us/u/prod/marvel/i/mg/6/d0/5a37df9f17281/detail.jpg",
    },
];

const gameGrid = comics
.concat(comics)
.sort(() => 0.5 - Math.random());

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach(item => {
    const { name, img } = item;
    const comic = document.createElement("div");
    comic.classList.add("comic");
    comic.dataset.name = name;
    
    const front = document.createElement("div");
    front.classList.add("front");

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${img})`;
    
    grid.appendChild(comic);
    comic.appendChild(front);
    comic.appendChild(back);
});

const match = () => {
    const selected = document.querySelectorAll(".selected");
    selected.forEach(comic => {
    comic.classList.add("match");
    });
};
const resetGuesses = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
    card.classList.remove("selected");
    });
};

grid.addEventListener("click", event => {
    
    const click = event.target;
    
    if (click.nodeName === "SECTION" ||
    click === previousTarget ||
    click.parentNode.classList.contains("selected") ||
    click.parentNode.classList.contains("match")) {
        return;
  }
    
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = click.parentNode.dataset.name;
            console.log(firstGuess);
            click.parentNode.classList.add("selected");
        }else {
            secondGuess = click.parentNode.dataset.name;
            console.log(secondGuess);
            click.parentNode.classList.add("selected");
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = click;
    }
});
