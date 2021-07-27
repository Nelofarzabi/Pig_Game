
var scors , activePlayer  , roundScor ; 
scors = [0 , 0];
activePlayer = 0 ;
roundScor = 0;
// three commint
//
// console.log (dice);
// document.querySelector('#current--' + activePlayer ).textContent = dice;
 
// var scores = document.querySelector('#score--0').textContent;
// console.log (scores);

//four comment
document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click' , function(){
   var dice = Math.floor(Math.random() * 6 ) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-' + dice + '.png';
    if (dice !== 1){
   roundScor += dice ;
   document.querySelector('#current--' + activePlayer).textContent = roundScor;
    }
    else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScor = 0;
    }

  

})


 