document.getElementById('xbtn').onclick = function() {
    document.getElementById('modalka').hidden = true;
};

let canc = document.getElementById('cancel');
let mod = document.querySelector('.modal-overlay');
canc.onclick = function() {
mod.classList.remove('modalka');
};

let explore = document.getElementById('exp-btn');
explore.onclick = function () {
    mod.classList.add('modal-overlay');
};


let zamena = document.getElementById('zamena');
let okButton = document.getElementById('ok');

okButton.onclick = function () {
    zamena.classList.toggle('white');
}