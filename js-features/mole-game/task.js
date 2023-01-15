let dead = parseInt(document.getElementById('dead').textContent, 10);
let lost = parseInt(document.getElementById('lost').textContent, 10);

function getHole(index) {
    return document.getElementById(`hole${index}`)
};
function youWin(){
    alert("You win")
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
};
function youLose(){
    alert("You lose")
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
};

for (let index = 1; index < 10; index += 1) {
    const hole = getHole(index);
    hole.onclick = function() {
        if(hole.classList.contains('hole_has-mole')) {
            dead = dead + 1;
            document.getElementById('dead').textContent = dead;
            if (dead === 10) {
                youWin();
            };
        } else {
            lost = lost + 1;
            document.getElementById('lost').textContent = lost;
            if (lost === 5) {
                youLose();
            };
        };
    };
};




