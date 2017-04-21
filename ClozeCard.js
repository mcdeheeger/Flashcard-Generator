function ClozeCard (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, '...');
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington")
// console.log();
// // "George Washington"
// console.log(firstPresidentCloze.cloze);
// console.log();
// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);
// console.log();
// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);
// console.log();

var oakGenusCloze = new ClozeCard("Quercus is the genus of the black oak tree.", "Quercus")
// console.log();
// // "George Washington"
// console.log(oakGenusCloze.cloze);
// console.log();
// // " ... was the first president of the United States.
// console.log(oakGenusCloze.partial);
// console.log();
// // "George Washington was the first president of the United States.
// console.log(oakGenusCloze.fullText);
// console.log();


var brokenCloze = new ClozeCard("This doesn't work", "oops");
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// console.log();
// "George Washington"
// console.log(brokenCloze.cloze);
// console.log();
// // " ... was the first president of the United States.
// console.log(brokenCloze.partial);
// console.log();
// // "George Washington was the first president of the United States.
// console.log(brokenCloze.fullText);
// console.log();

// creates the printInfo method and applies it to all programmer objects
ClozeCard.prototype.printInfo = function() {
    if (this.fullText.includes(this.cloze)) {
        console.log("\nPartial: " + this.partial + "\nCloze: " + this.cloze +
            "\nFull Text: " + this.fullText + "\n");
    }
    else (
        console.log("Error: The cloze is not within the full text.\n")
    )
};

firstPresidentCloze.printInfo();
oakGenusCloze.printInfo();
brokenCloze.printInfo();


module.exports = ClozeCard;

