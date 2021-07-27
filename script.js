
var scors, activePlayer, roundScor , gamePlay;
init();

// three commint
//
// console.log (dice);
// document.querySelector('#current--' + activePlayer ).textContent = dice;

// var scores = document.querySelector('#score--0').textContent;
// console.log (scores);

//four comment
// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function () {
    if(gamePlay){
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            roundScor += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScor;
        }
        else {
            nextPlayer();
    
        }

    }
  



});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if(gamePlay){
        scors[activePlayer] += roundScor;
    document.querySelector('#score--' + activePlayer).textContent = scors[activePlayer];
    if (scors[activePlayer] >= 20) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner !!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('winner');
        document.querySelector('.player--' + activePlayer).classList.remove('active');
        gamePlay = false ;
    }
    else {
        nextPlayer();
    }
    }
   
    


});
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScor = 0;
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('.player--0').classList.toggle('active');
    document.querySelector('.player--1').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
 document.querySelector('.btn--new').addEventListener('click', init);

function init() {
   
    scors = [0, 0];
    activePlayer = 0;
    roundScor = 0;
    gamePlay = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0' ).classList.remove('winner');
    document.querySelector('.player--1' ).classList.remove('winner');
    document.querySelector('.player--0' ).classList.remove('active');
    document.querySelector('.player--1' ).classList.remove('active');
    document.querySelector('.player--0' ).classList.add('active');
    

}


