"use strict"

var itemsArr = [];

var leftImage = document.getElementById('left_product');
var midImage = document.getElementById('middle_product');
var rightImage = document.getElementById('right_product');

console.log();

var products = document.getElementById("products");

var trials = 25;

function Product(name, image) {

    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.counter = 0;
    this.timesShown = 0;

    itemsArr.push(this);
}

function renderImages(leftProducts, midProducts, rightProducts) {
    leftImage.setAttribute("src", itemsArr[leftProducts].url);
    midImage.setAttribute("src", itemsArr[midProducts].url);
    rightImage.setAttribute("src", itemsArr[rightProducts].url);

    numberShown(leftProducts, midProducts, rightProducts);
}

function random() {
    var leftImg = Math.round(Math.random() * (itemsArr.length - 1))
    var midImg = Math.round(Math.random() * (itemsArr.length - 1))
    var rightImg = Math.round(Math.random() * (itemsArr.length - 1))

    while (leftImg === midImg || midImg === rightImg || leftImg === rightImg) {
        leftImg = Math.round(Math.random() * (itemsArr.length - 1))
        midImg = Math.round(Math.random() * (itemsArr.length - 1))
        rightImg = Math.round(Math.random() * (itemsArr.length - 1))
    };

    renderImages(leftImg, midImg, rightImg);
}

function numberOfTrials(object) {
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i].url === object) {
            itemsArr[i].counter++;
            trials--;
        }
    }
}

function numberShown(leftProducts, midProducts, rightProducts) {
    itemsArr[leftProducts].timesShown++;
    itemsArr[midProducts].timesShown++;
    itemsArr[rightProducts].timesShown++;
}

function countProducts(event) {
    var targetId = event.target.id;

    if (trials !== 0) {
        if (targetId === "left_product" || targetId === "middle_product" || targetId === "right_product") {
            var object = event.target.getAttribute("src");
            numberOfTrials(object);
            random();
        }
    } else {
        products.removeEventListener("click", countProducts)
        console.log(itemsArr);
    }
}

new Product("bag", "bag.jpg");
new Product("banana", "banana.jpg");
new Product("bathroom", "bathroom.jpg");
new Product("bubblegum", "bubblegum.jpg");
new Product("boots", "boots.jpg");
new Product("breakfast", "breakfast.jpg");
new Product("bubblegum", "bubblegum.jpg");
new Product("chair", "chair.jpg");
new Product("cthulhu", "cthulhu.jpg");
new Product("dog-duck", "dog-duck.jpg");
new Product("dragon", "dragon.jpg");
new Product("pen", "pen.jpg");
new Product("pet-sweep", "pet-sweep.jpg");
new Product("scissors", "scissors.jpg");
new Product("shark", "shark.jpg");
new Product("tauntaun", "tauntaun.jpg");
new Product("unicorn", "unicorn.jpg");
new Product("usb", "usb.gif");
new Product("water-can", "water-can.jpg");
new Product("wine-glass", "wine-glass.jpg");

random();


products.addEventListener("click", countProducts);

var results = document.getElementById("results");
results.addEventListener("click", function () {
    var ul = document.createElement("ul");
    var section = document.getElementById("list_items");

    section.appendChild(ul);
    for (let i = 0; i < 20; i++) {
        var li = document.createElement("li");
        li.textContent = itemsArr[i].name + " had votes,  " + itemsArr[i].counter + "  and was seen " + itemsArr[i].timesShown
        ul.appendChild(li);
    }
});

function refreshPage() {
    window.location.reload();
}