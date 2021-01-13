var itemsArr = [];

var leftImage = document.getElementById('left_product');
var midImage = document.getElementById('middle_product');
var rightImage = document.getElementById('right_product');
var productsSection = document.getElementById("products");
var productsCanvas = document.getElementById("products_chart").getContext('2d');
var showProd = [];

var trials = 5;

function Product(name, image) {

    this.image = image;
    this.name = name;
    this.url = 'img/' + image;
    this.counter = 0;
    this.timesShown = 0;

    itemsArr.push(this);
}
//get imgs

function renderImages(leftProduct, midProduct, rightProduct) {
    leftImage.setAttribute("src", itemsArr[leftProduct].url);
    midImage.setAttribute("src", itemsArr[midProduct].url);
    rightImage.setAttribute("src", itemsArr[rightProduct].url);

    numberShown(leftProduct, midProduct, rightProduct);
}

function checkAvlbl(index) {

    for (let i = 0; i < showProd.length; i++) {
        if (showProd[i] === index) {
            return true;
        }
    }
    return false;
}

function random() {

    do {
        var leftImg = Math.floor(Math.random() * (itemsArr.length - 1));
        var midImg = Math.floor(Math.random() * (itemsArr.length - 1));
        var rightImg = Math.floor(Math.random() * (itemsArr.length - 1));
    } while (leftImg === midImg || midImg === rightImg || leftImg === rightImg || (checkAvlbl(leftImg) || checkAvlbl(midImg) || checkAvlbl(rightImg)));

    if (showProd.length === 6) {
        for (let i = 0; i < 3; i++) {
            showProd.shift();
        }
    }

    showProd.push(leftImg, midImg, rightImg);
    // console.log(showProd);

    renderImages(leftImg, midImg, rightImg);
}
// claculate the number of trils
function numberOfTrials(object) {
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i].url === object) {
            itemsArr[i].counter++;
            trials--;
        }
    }
}

//add numbershowen to pics
function numberShown(leftProducts, midProducts, rightProducts) {
    itemsArr[leftProducts].timesShown++;
    itemsArr[midProducts].timesShown++;
    itemsArr[rightProducts].timesShown++;
}

// generate chart
function getChart() {
    var arrayOfProductsNames = [];
    var arrayOfProductsCounters = [];
    var arrayOfProductsShown = [];

    for (let i = 0; i < itemsArr.length; i++) {
        arrayOfProductsNames.push(itemsArr[i].name);
        arrayOfProductsCounters.push(itemsArr[i].counter);
        arrayOfProductsShown.push(itemsArr[i].timesShown);
    }

    //chart

    var chart = new Chart(productsCanvas, {
        type: 'bar',
        data: {
            labels: arrayOfProductsNames,
            datasets: [
                {
                    label: '# of products clicked',
                    data: arrayOfProductsCounters,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(180, 140, 255, 0.5)',
                        'rgba(150, 100, 25, 0.5)',
                        'rgba(190, 40, 160, 0.5)',
                        'rgba(240, 12, 50, 0.5)',
                        'rgba(24, 100, 150, 0.5)',
                        'rgba(185, 120, 170, 0.5)',
                        'rgba(40, 70, 50, 0.5)',
                        'rgba(175, 40, 250, 0.5)',
                        'rgba(40, 175, 220, 0.5)',
                        'rgba(100, 200, 75, 0.5)',
                        'rgba(50, 200, 125, 0.5)',
                        'rgba(80, 125, 120, 0.5)',
                        'rgba(70, 70, 70, 0.5)',
                        'rgba(100, 100, 100, 0.5)',
                        'rgba(200, 200, 200, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(180, 140, 255, 1)',
                        'rgba(150, 100, 25, 1)',
                        'rgba(190, 40, 160, 1)',
                        'rgba(240, 12, 50, 1)',
                        'rgba(24, 100, 150, 1)',
                        'rgba(185, 120, 170, 1)',
                        'rgba(40, 70, 50, 1)',
                        'rgba(175, 40, 250, 1)',
                        'rgba(40, 175, 220, 1)',
                        'rgba(100, 200, 75, 1)',
                        'rgba(50, 200, 125, 1)',
                        'rgba(80, 125, 120, 1)',
                        'rgba(25, 100, 250, 1)',
                        'rgba(750, 250, 25, 1)',
                        'rgba(160, 60, 250, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of products shown',
                    data: arrayOfProductsShown,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(180, 140, 255, 0.2)',
                        'rgba(150, 100, 25, 0.2)',
                        'rgba(190, 40, 160, 0.2)',
                        'rgba(240, 12, 50, 0.2)',
                        'rgba(24, 100, 150, 0.2)',
                        'rgba(185, 120, 170, 0.2)',
                        'rgba(40, 70, 50, 0.2)',
                        'rgba(175, 40, 250, 0.2)',
                        'rgba(40, 175, 220, 0.2)',
                        'rgba(100, 200, 75, 0.2)',
                        'rgba(50, 200, 125, 0.2)',
                        'rgba(80, 125, 120, 0.2)',
                        'rgba(25, 100, 250, 0.2)',
                        'rgba(750, 250, 25, 0.2)',
                        'rgba(160, 60, 250, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(180, 140, 255, 1)',
                        'rgba(150, 100, 25, 1)',
                        'rgba(190, 40, 160, 1)',
                        'rgba(240, 12, 50, 1)',
                        'rgba(24, 100, 150, 1)',
                        'rgba(185, 120, 170, 1)',
                        'rgba(40, 70, 50, 1)',
                        'rgba(175, 40, 250, 1)',
                        'rgba(40, 175, 220, 1)',
                        'rgba(100, 200, 75, 1)',
                        'rgba(50, 200, 125, 1)',
                        'rgba(80, 125, 120, 1)',
                        'rgba(25, 100, 250, 1)',
                        'rgba(750, 250, 25, 1)',
                        'rgba(160, 60, 250, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
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
        productsSection.removeEventListener("click", countProducts);
        renderResults();
        getChart();
    }
}

new Product("bag", "bag.jpg");
new Product("banana", "banana.jpg");
new Product("bathroom", "bathroom.jpg");
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
new Product("sweep", "sweep.png");
new Product("tauntaun", "tauntaun.jpg");
new Product("unicorn", "unicorn.jpg");
new Product("usb", "usb.gif");
new Product("water-can", "water-can.jpg");
new Product("wine-glass", "wine-glass.jpg");

random();
productsSection.addEventListener("click", countProducts);

//push reuslts
function renderResults() {
    var results = document.getElementById("results");
    results.addEventListener("click", function () {
        var ul = document.createElement("ul");
        var section = document.getElementById("list_items");

        section.appendChild(ul);
        for (let i = 0; i < 20; i++) {
            var li = document.createElement("li");
            li.textContent = itemsArr[i].name + " had " + itemsArr[i].counter + " votes,  and was seen " + itemsArr[i].timesShown
            ul.appendChild(li);
            var x = itemsArr[i].name + " had " + itemsArr[i].counter + " votes,  and was seen " + itemsArr[i].timesShown
            var shayth = [];
            shayth.push(x);

            // var conv = shayth.toString();
            // console.log(conv);
            for (i = 0; i < 20; i++) {
                t = localStorage.setItem("vote", JSON.stringify(shayth));
            }

            // function storeVotes() {
            //     shayth = localStorage.setItem("votes", JSON.stringify([x]));
            //     // console.log(localStorage);
            // }
            // storeVotes();

        }
        //get all items from locatstorage
        function displayItems() {
            let li, i;
            // Display items 
            document.getElementById("show").innerHTML = localStorage.getItem("vote");
            for (i = 0; i < localStorage.length; i++) {
                res = localStorage.key(shayth);
                document.getElementById("show").innerHTML += res;
            }
        }
        displayItems();

    });
}
//refresh function
function refreshPage() {
    window.location.reload();
}




//clear datastorage

function deleteItems() {
    // Clear localStorage items 
    localStorage.clear();
    location.reload();
}

