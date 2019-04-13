$(document).ready(function() {

    $(".score").hide();
    $(".btn-warning").on("click", run);

    var number = 70;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(".text").empty();
        displayQuiz();
    };

    function decrement() {
        number--;
        $(".timer").html("<h2>Time remaining: " + number + "</h2>");
        if (number === 0) {
        alert("Time is Up!");
        $(".timer").empty();
        stop();
        }
    };

    function stop() {
        clearInterval(intervalId);
        answers();
    };

    function score(correctCount, wrongCount, blankCount) {
        $(".timer").empty();
        $(".timer").hide();
        $(".btn-warning").empty();
        $(".btn-warning").hide();
        $(".text").hide();
        $(".score").show();
        $("#correct").html("<h2>Correct answers: " + correctCount + "</h2>");
        $("#wrong").html("<h2>Wrong answers: " + wrongCount + "</h2>");
        $("#blank").html("<h2>No answers: " + blankCount + "</h2>");
    };

    function answers() {
        var correctCount = 0;
        var wrongCount = 0;
        var blankCount = 0;
        var correctAnswer;
        var userAnswer;
    
        for (var i = 0; i < quiz.length; i++) {
            correctAnswer = quiz[i].ca;
            userAnswer = $('input[id=radio'+ i +']:checked + label').text();
    
          if (userAnswer === correctAnswer) {
            correctCount++;
          } 
          else if (userAnswer === "") {
            blankCount++;
          } 
          else if (userAnswer !== correctAnswer) {
            wrongCount++;
          }
        }
        score(correctCount, wrongCount, blankCount);
    };

   function displayQuiz() {
        var div = $(".text");
        $(".btn-warning").hide();
        $(".score").hide();

          for (var i = 0; i < quiz.length; i++) {
          div.append("<h3><div id='quiz'>" + quiz[i].q + "</div></h3>");
          var a1 = quiz[i].a[0];
          var a2 = quiz[i].a[1];
          var a3 = quiz[i].a[2];
    
          div.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+ i +'" id="radio'+ i +'"><label class="form-check-label" id="radio'+ i +'label" for="radio'+ i +'">' + a1 + '</label></div>');
          div.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+ i +'" id="radio'+ i +'"><label class="form-check-label" id="radio'+ i +'label" for="radio'+ i +'">' + a2 + '</label></div>');
          div.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+ i +'" id="radio'+ i +'"><label class="form-check-label" id="radio'+ i +'label" for="radio'+ i +'">' + a3 + '</label></div>');
          }

        var end = '<button class="btn btn-warning btn-lg" id="done-button" type="submit">SUBMIT</button>';
        div.append(end);
        $("#done-button").on("click", stop);
    };

    var quiz = [
        {
        q: "In Frozen, what's the name of the snowman?",
        a: ["Stitch", "Oolaf", "Snoopy"],
        ca: "Oolaf"
        },
        {
        q: "In Lilo & Stitch, what's the name of the alien #626?",
        a: ["Stitch", "Oolaf", "Snoopy"],
        ca: "Stitch"
        },
        {
        q: "Who is a character from Mickey & Friends?",
        a: ["Goofy", "Sulley", "Ariel"],
        ca: "Goofy"
        },
        {
        q: "Who is a character from Monster University?",
        a: ["Goofy", "Mike", "Ariel"],
        ca: "Mike"
        },
        {
        q: "Who is Mickey Mouse's Girlfriend?",
        a: ["Daisy", "Minnie", "Ariel"],
        ca: "Minnie"
        },
        {
        q: "Who is NOT a Disney Princess?",
        a: ["Elsa", "Belle", "Snow White"],
        ca: "Elsa"
        },
        {
        q: "Who is NOT a character from Cars?",
        a: ["Cruz Ramirez", "Jackson Storm", "Monster Truck"],
        ca: "Monster Truck"
        }
    ];

});
