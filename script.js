
var scors , activePlayer , dice , roundScor ; 
scors = [0 , 0];
activePlayer = 1 ;
roundScor = 0;
dice = Math.floor(Math.random() * 6 )+1;
console.log (dice);
document.querySelector('#current--' + activePlayer ).textContent = dice;
 
var scores = document.querySelector('#score--0').textContent;
console.log (scores);
document.querySelector('.dice').style.display = 'none';


 