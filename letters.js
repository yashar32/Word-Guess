
// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying
// character or a blank placeholder(such as an underscore), depending on whether or not the user has guessed
// the letter.That means the constructor should define:

var Letter = function (guess) {
    this.letterChosen = guess;
    console.log("line 9 letter entered into function = " + this.letterChosen);
  // A string value to store the underlying character for the letter.
  this.correctLetter = "y";

  // A boolean value that stores whether that letter has been guessed yet
  this.wasThisLetterAlreadyGuessed = false;

  // A function that returns the underlying character if the letter has been guessed,
  // or a placeholder (like an underscore) if the letter has not been guessed
    this.placeholderForLetter = function (guess) {
        if (this.wasThisLetterAlreadyGuessed == true) {
            console.log("_");
        }
        else {
            console.log("the correct letter is " + this.letterChosen);
        }
  };

  // A function that takes a character as an argument and checks it against the underlying
  // character, updating the stored boolean value to true if it was guessed correctly
  this.processLetter = function(guess) {
    if (this.letterChosen === this.correctLetter) {
        console.log("you guessed correctly!");
        this.wasThisLetterAlreadyGuessed = false;
        this.placeholderForLetter(this.letterChosen);
    } else {
        console.log("you guessed INCORRECTLY")
        this.wasThisLetterAlreadyGuessed = true;
        this.placeholderForLetter(guess);
      }
    };

       this.processLetter(guess);

}

var guess = new Letter("y"); 