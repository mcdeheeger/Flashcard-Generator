function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington")
// "Who was the first president of the United States?"
console.log(firstPresident.front)
// "George Washington"
console.log(firstPresident.back)

var oakGenus = new BasicCard("What is the genus of the black oak tree?", "Quercus")
// "What is the genus of the black oak tree?"
console.log(oakGenus.front)
// "Quercus"
console.log(oakGenus.back)

BasicCard.prototype.printInfo = function() {
    console.log("\nFront: " + this.front + "\nBack: " + this.back + "\n");
};

firstPresident.printInfo();
oakGenus.printInfo();

module.exports = BasicCard






