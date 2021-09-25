player1=localStorage.getItem("player_1");
player2=localStorage.getItem("player_2");
player1score=0;
player2score=0;
document.getElementById("player_1").innerHTML=player1+": ";
document.getElementById("player_2").innerHTML=player2+": ";
document.getElementById("player_1score").innerHTML=player1score+": ";
document.getElementById("player_2score").innerHTML=player2score+": ";
document.getElementById("player_question").innerHTML="Question turn- "+player1;
document.getElementById("player_answer").innerHTML="Answer turn- "+player2;
function send()
{
   number1=document.getElementById("number1").value;
   number2=document.getElementById("number2").value;
   newanswer=parseInt(number1)+ parseInt(number2);
   question_word = "<h4 id='word_display'> Q. "+number1+"+"+number2+"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row=question_word+input_box+check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number1").value="";
 document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";
function check()
{
   getanswer=document.getElementById("input_check_box").value;
   answer=getanswer.toLowerCase();
   if(answer==newanswer){
   if (answer_turn=="player1"){
      player1score=player1score+1;
      document.getElementById("player_1score").innerHTML=player1score;
   }
   else{player2score=player2score+1;
      document.getElementById("player_2score").innerHTML=player2score;

   }
   }
   if(question_turn=="player1")
   {
      question_turn="player2";
      document.getElementById("player_question").innerHTML="Question turn- "+player2;
   }
   else{
      question_turn="player1";
      document.getElementById("player_question").innerHTML="Question turn- "+player1;  
   }
   if(answer_turn=="player1")
   {
      answer_turn="player2";
      document.getElementById("player_answer").innerHTML="answer turn- "+player2;
   }
   else{
      answer_turn="player1";
      document.getElementById("player_answer").innerHTML="answer turn- "+player1;  
   }
   document.getElementById("output").innerHTML="";
}