$(document).ready(function() {
    $("#blanks form").submit(function() {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
        console.log(userInput)
        var userInput = $("input." + blank).val();
        $("." + blank).text(userInput).val();
      });

      $("#story").sho();
      alert('Got to end of form submit!');

      event.preventDefault();
    });
  });