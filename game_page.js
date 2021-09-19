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
   getword=document.getElementById("word").value;
   word=getword.toLowerCase();
   first=word.charAt(1);
   x=Math.floor(word.length/2);
   second=word.charAt(x);
   y=word.length-1;
   third=word.charAt(y);
remove_1=word.replace(first,"_");
remove_2=remove_1.replace(second,"_");
remove_3=remove_2.replace(third,"_");
question_word = "<h4 id='word_display'> Q. "+remove_3+"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row=question_word+input_box+check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("word").value="";
}