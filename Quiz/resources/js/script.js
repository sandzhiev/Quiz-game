var question = ['question-0', 'question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7', 'question-8', 'question-9', 'question-10', 'question-11'];
var i = 0;

var nextPage = function() {
   
        document.getElementById(question[i]).style.display = 'none';
        document.getElementById(question[i+1]).style.display = 'block';
        i++;
        if (i>10) {
            document.getElementById('next').style.display = 'none';
            document.getElementById('enter').style.display = 'none';
        }   
}

function next(event) {
    if(event.keyCode === 13) {
        nextPage();
    }
}

document.getElementById('next').onclick = nextPage;

document.getElementById('name').addEventListener('keyup', next)

/*document.getElementById('answer-1').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        nextPage(); 
    } 
})*/

/*function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();*/




