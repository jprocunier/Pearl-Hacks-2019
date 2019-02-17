//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//Card Matching Game -- Pearl Hacks 2019
//Code Written by Jessi Whiteside
//Snappy Images and Fun Facts Found and Edited by Hayley Rose
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var score = 0; //tracks current score
var tryingToMatch = 0; //0-first flip of turn 1-guessing match
var cardTrying = 0; //indicates current match attempt (values 1-6)
var cardJustClicked = 0; //used to prevent clicking same card twice

var notTurned = '<img src="images/banana.JPG" width="100" height="100" alt="banana">'; //will show on unturned cards
var firstMatch = '<img src="images/ada.JPG" width="100" height="100" alt="ada lovelace">'; //will be for cardTrying 1
var secondMatch = '<img src="images/rosalind.PNG" width="100" height="100" alt="rosalind franklin">'; //will be for cardTrying 2
var thirdMatch = '<img src="images/christa.JPG" width="100" height="100" alt="christa mcauliffe">'; //will be for cardTrying 3
var fourthMatch = '<img src="images/grace.PNG" width="100" height="100" alt="grace hopper">'; //will be for cardTrying 4
var fifthMatch = '<img src="images/marie.JPG" width="100" height="100" alt="marie curie">'; //will be for cardTrying 5
var sixthMatch = '<img src="images/rosie.JPG" width="100" height="100" alt="rosie the riveter">'; //will be for cardTrying 6

var firstMatch2 = '<img src="images/ada.JPG" width="250" height="250" alt="ada lovelace">'; //will be for cardTrying 1
var secondMatch2 = '<img src="images/rosalind.PNG" width="250" height="250" alt="rosalind franklin">'; //will be for cardTrying 2
var thirdMatch2 = '<img src="images/christa.JPG" width="250" height="250" alt="christa mcauliffe">'; //will be for cardTrying 3
var fourthMatch2 = '<img src="images/grace.PNG" width="250" height="250" alt="grace hopper">'; //will be for cardTrying 4
var fifthMatch2 = '<img src="images/marie.JPG" width="250" height="250" alt="marie curie">'; //will be for cardTrying 5
var sixthMatch2 = '<img src="images/rosie.JPG" width="250" height="250" alt="rosie the riveter">'; //will be for cardTrying 6

var fact1 = "Ada Lovelace was an english mathematician who created the first algorithm ever intended for a mechanical general purpose computer. :O"; //ada lovelace
var fact2 = "Rosalind Franklin was a chemist who made major contributions to our understanding of DNA and RNA. :D"; //rosalind franklin
var fact3 = "Christa McAuliffe was the first teacher to be chosen for a space mission. Unfortunately, her mission failed when the Challenger explosion occurred on January 28th of 1986. :("; //christa mcauliffe
var fact4 = "Grace Hopper was an american computer scientist and United States Navy Admiral. She was one of the first programmers of the Harvard Mark I computer. ^_^"; //grace hopper
var fact5 = "Marie Curie discovered Radium and Polonium and was also awarded two nobel prizes! Unfortunately, she died in her lab of a blood disease from the radioactive materials. :c"; //marie curie
var fact6 = "Rosie the Riveter was a character created for posters to encourage women to go to work while men were off fighting the war. Many women were inspired and empowered by Rosie! :)"; //rosie the riveter

//document.getElementById("factPic").innerHTML = secondMatch;

var set; //will indicate set being checked
var set1 = 0; //1 when set A found
var set2 = 0; //1 when set B found
var set3 = 0; //1 when set C found
var set4 = 0; //1 when set D found
var set5 = 0; //1 when set E found
var set6 = 0; //1 when set F found

//card answers:
//   A - cards 4 and 7
//   B - cards 9 and 11
//   C - cards 2 and 12
//   D - cards 3 and 5
//   E - cards 6 and 8
//   F - cards 1 and 10

//function for button 1
function buttonOne() { //F

  if (cardJustClicked == 1) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(6)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card1").innerHTML = sixthMatch;
      cardTrying = 6;
      tryingToMatch = 1;
    }
    else if (tryingToMatch == 1) {
      if (cardTrying == 6) {
        score++;
        set6 = 1;
        document.getElementById("card1").innerHTML = sixthMatch;
        document.getElementById("funFact").innerHTML = fact6;
        document.getElementById("factPic").innerHTML = sixthMatch2;
      }
      else {
        document.getElementById("card1").innerHTML = sixthMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card1").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 1;

}

//function for button 2
function buttonTwo() { //C

  if (cardJustClicked == 2) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(3)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card2").innerHTML = thirdMatch;
      cardTrying = 3;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 3) {
        score++;
        set3 = 1;
        document.getElementById("card2").innerHTML = thirdMatch;
        document.getElementById("funFact").innerHTML = fact3;
        document.getElementById("factPic").innerHTML = thirdMatch2;
      }
      else {
        document.getElementById("card2").innerHTML = thirdMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card2").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 2;

}

//function for button 3
function buttonThree() { //D

  if (cardJustClicked == 3) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(4)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card3").innerHTML = fourthMatch;
      cardTrying = 4;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 4) {
        score++;
        set4 = 1;
        document.getElementById("card3").innerHTML = fourthMatch;
        document.getElementById("funFact").innerHTML = fact4;
        document.getElementById("factPic").innerHTML = fourthMatch2;
      }
      else {
        document.getElementById("card3").innerHTML = fourthMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card3").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 3;

}

//function for button 4
function buttonFour() { //A

  if (cardJustClicked == 4) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(1)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card4").innerHTML = firstMatch;
      cardTrying = 1;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 1) {
        score++;
        set1 = 1;
        document.getElementById("card4").innerHTML = firstMatch;
        document.getElementById("funFact").innerHTML = fact1;
        document.getElementById("factPic").innerHTML = firstMatch2;
      }
      else {
        document.getElementById("card4").innerHTML = firstMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card4").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 4;

}

//function for button 5
function buttonFive() { //D

  if (cardJustClicked == 5) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(4)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card5").innerHTML = fourthMatch;
      cardTrying = 4;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 4) {
        score++;
        set4 = 1;
        document.getElementById("card5").innerHTML = fourthMatch;
        document.getElementById("funFact").innerHTML = fact4;
        document.getElementById("factPic").innerHTML = fourthMatch2;
      }
      else {
        document.getElementById("card5").innerHTML = fourthMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card5").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 5;

}

//function for button 6
function buttonSix() { //E

  if (cardJustClicked == 6) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(5)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card6").innerHTML = fifthMatch;
      cardTrying = 5;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 5) {
        score++;
        set5 = 1;
        document.getElementById("card6").innerHTML = fifthMatch;
        document.getElementById("funFact").innerHTML = fact5;
        document.getElementById("factPic").innerHTML = fifthMatch2;
      }
      else {
        document.getElementById("card6").innerHTML = fifthMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card6").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 6;

}

//function for button 7
function buttonSeven() { //A

  if (cardJustClicked == 7) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(1)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card7").innerHTML = firstMatch;
      cardTrying = 1;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 1) {
        score++;
        set1 = 1;
        document.getElementById("card7").innerHTML = firstMatch;
        document.getElementById("funFact").innerHTML = fact1;
        document.getElementById("factPic").innerHTML = firstMatch2;
      }
      else {
        document.getElementById("card7").innerHTML = firstMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card7").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 7;

}

//function for button 8
function buttonEight() { //E

  if (cardJustClicked == 8) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(5)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card8").innerHTML = fifthMatch;
      cardTrying = 5;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 5) {
        score++;
        set5 = 1;
        document.getElementById("card8").innerHTML = fifthMatch;
        document.getElementById("funFact").innerHTML = fact5;
        document.getElementById("factPic").innerHTML = fifthMatch2;
      }
      else {
        document.getElementById("card8").innerHTML = fifthMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card8").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 8;

}

//function for button 9
function buttonNine() { //B

  if (cardJustClicked == 9) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(2)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card9").innerHTML = secondMatch;
      cardTrying = 2;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 2) {
        score++;
        set2 = 1;
        document.getElementById("card9").innerHTML = secondMatch;
        document.getElementById("funFact").innerHTML = fact2;
        document.getElementById("factPic").innerHTML = secondMatch2;
      }
      else {
        document.getElementById("card9").innerHTML = secondMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card9").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 9;

}

//function for button 10
function buttonTen() { //F

  if (cardJustClicked == 10) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(6)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card10").innerHTML = sixthMatch;
      cardTrying = 6;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 6) {
        score++;
        set6 = 1;
        document.getElementById("card10").innerHTML = sixthMatch;
        document.getElementById("funFact").innerHTML = fact6;
        document.getElementById("factPic").innerHTML = sixthMatch2;
      }
      else {
        document.getElementById("card10").innerHTML = sixthMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card10").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 10;

}

//function for button 11
function buttonEleven() { //B

  if (cardJustClicked == 11) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(2)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card11").innerHTML = secondMatch;
      cardTrying = 2;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 2) {
        score++;
        set2 = 1;
        document.getElementById("card11").innerHTML = secondMatch;
        document.getElementById("funFact").innerHTML = fact2;
        document.getElementById("factPic").innerHTML = secondMatch2;
      }
      else {
        document.getElementById("card11").innerHTML = secondMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card11").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 11;

}

//function for button 12
function buttonTwelve() { //C

  if (cardJustClicked == 12) {
    //do Nothing if you just clicked this card
  }
  else if (checkSet(3)) {
    //do Nothing if this match has already been found
  }
  else {
    if (tryingToMatch == 0) {
      document.getElementById("card12").innerHTML = thirdMatch;
      cardTrying = 3;
      tryingToMatch = 1;
    }
    else {
      if (cardTrying == 3) {
        score++;
        set3 = 1;
        document.getElementById("card12").innerHTML = thirdMatch;
        document.getElementById("funFact").innerHTML = fact3;
        document.getElementById("factPic").innerHTML = thirdMatch2;
      }
      else {
        document.getElementById("card12").innerHTML = thirdMatch;
        alert("This is not the card you are looking for");
        wrongCard();
        document.getElementById("card12").innerHTML = notTurned;
      }
      tryingToMatch = 0;
    }

    document.getElementById("score").innerHTML = "Score: " + score;

  }

  cardJustClicked = 12;

}

//function for turning back last card when guess is wrong
function wrongCard() {

  //card answers:
  //   A - cards 4 and 7
  //   B - cards 9 and 11
  //   C - cards 2 and 12
  //   D - cards 3 and 5
  //   E - cards 6 and 8
  //   F - cards 1 and 10

  if (cardTrying == 1) { //turn around any cards with A
    document.getElementById("card4").innerHTML = notTurned;
    document.getElementById("card7").innerHTML = notTurned;
  }
  if (cardTrying == 2) { //turn around any cards with B
    document.getElementById("card9").innerHTML = notTurned;
    document.getElementById("card11").innerHTML = notTurned;
  }
  if (cardTrying == 3) { //turn around any cards with C
    document.getElementById("card2").innerHTML = notTurned;
    document.getElementById("card12").innerHTML = notTurned;
  }
  if (cardTrying == 4) { //turn around any cards with D
    document.getElementById("card3").innerHTML = notTurned;
    document.getElementById("card5").innerHTML = notTurned;
  }
  if (cardTrying == 5) { //turn around any cards with E
    document.getElementById("card6").innerHTML = notTurned;
    document.getElementById("card8").innerHTML = notTurned;
  }
  if (cardTrying == 6) { //turn around any cards with F
    document.getElementById("card1").innerHTML = notTurned;
    document.getElementById("card10").innerHTML = notTurned;
  }

}

function checkSet(set){

  if (set == 1) { //check if match A found
    if (set1 == 1) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (set == 2) { //check if match B found
    if (set2 == 1) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (set == 3) { //check if match C found
    if (set3 == 1) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (set == 4) { //check if match D found
    if (set4 == 1) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (set == 5) { //check if match E found
    if (set5 == 1) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (set == 6){ //check if match F found
    if (set6 == 1) {
      return true;
    }
    else {
      return false;
    }
  }

}
