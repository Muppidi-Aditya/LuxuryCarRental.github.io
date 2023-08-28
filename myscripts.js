let carElement1 = document.getElementById("car1");
let carElement2 = document.getElementById("car2");
let carElement3 = document.getElementById("car3");
let carElement4 = document.getElementById("car4");
let carElement5 = document.getElementById("car5");
let carElement6 = document.getElementById("car6");
let carElement7 = document.getElementById("car7");
let carElement8 = document.getElementById("car8");

let imgElement = document.getElementById("carImg");
let modelElement = document.getElementById("model");
let companyElement = document.getElementById("company");
let yearElement = document.getElementById("year");
let acElement = document.getElementById("ac");
let srElement = document.getElementById("sr");
let typeElement = document.getElementById("type");
let fuelElement = document.getElementById("fuel");
let ratingElement = document.getElementById("rating");
let priceElement = document.getElementById("price");

let priceElem = document.getElementById("pricing");
let itemId = "benz";
let priceAdd = 1000;

let billingElement = document.getElementById("billingPart");
let billAmount = document.getElementById("billAmount");
let taxAmount = document.getElementById("taxAmount");
let totalAmount = document.getElementById("totalAmount");
let billCal = 0;
let taxCal = 0;
let totalCal = 0;

let ItemsArray = [
    {
        uniqueId : "benz",
        name : "Benz Mercedes A-Class",
        rating : "4.5",
        imgUrl : "assets/benzJs.png",
        prices : 1000,
        displayPrice : 1000,
        count : 1
    },
    {
        uniqueId : "bmw",
        name : "BMW 2 Series",
        rating : "4.2",
        imgUrl : "assets/bmwJs.png",
        prices : 895,
        displayPrice : 895,
        count : 1
    },
    {
        uniqueId : "audi",
        name : "Audi Q3",
        rating : "4.4",
        imgUrl : "assets/audiJs.png",
        prices : 920,
        displayPrice : 920,
        count : 1
    },
    {
        uniqueId : "baleno",
        name : "Suziki Baleno",
        rating : "4.8",
        imgUrl : "assets/balenoJs.png",
        prices : 1500,
        displayPrice : 1500,
        count : 1
    },
    {
        uniqueId : "skoda",
        name : "Skoda Octavia",
        rating : "4.5",
        imgUrl : "assets/skodaJs.png",
        prices : 900,
        displayPrice : 900,
        count : 1
    },
    {
        uniqueId : "jaguar",
        name : "Jaguar F Type",
        rating : "4.0",
        imgUrl : "assets/jaguarJs.png",
        prices : 745,
        displayPrice : 745,
        count : 1
    },
    {
        uniqueId : "ford",
        name : "Ford Mustang",
        rating : "4.6",
        imgUrl : "assets/fordJs.png",
        prices : 820,
        displayPrice : 820,
        count : 1
    },
    {
        uniqueId : "defender",
        name : "Land Rover Defender",
        rating : "4.3",
        imgUrl : "assets/lrJs.png",
        prices : 1200,
        displayPrice : 1200,
        count : 1
    }
];

let cartArray = [];

function car1(x)
{
    carElement1.classList.add("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/benzJs.png";
    imgElement.classList.remove("extra");

    modelElement.textContent = "A-Class";
    companyElement.textContent = "Benz Mercedes";
    yearElement.textContent = "2018";
    acElement.textContent = "Yes";
    srElement.textContent = "No";
    typeElement.textContent = "Manual";
    fuelElement.textContent = "Deisel";
    ratingElement.textContent = "4.5";
    priceElement.textContent = "1000 /- per Km";

    itemId = "benz";
    priceAdd = 1000;
}

function car2()
{
    carElement2.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/bmwJs.png";
    imgElement.classList.remove("extra");

    modelElement.textContent = "2 Series";
    companyElement.textContent = "BMW";
    yearElement.textContent = "2014";
    acElement.textContent = "Yes";
    srElement.textContent = "No";
    typeElement.textContent = "Manual";
    fuelElement.textContent = "Petrol";
    ratingElement.textContent = "4.2";
    priceElement.textContent = "895 /- per Km";

    itemId = "bmw";
}

function car3()
{
    carElement3.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/audiJs.png";
    imgElement.classList.remove("extra");

    modelElement.textContent = "Q3";
    companyElement.textContent = "Audi";
    yearElement.textContent = "2020";
    acElement.textContent = "Yes";
    srElement.textContent = "Yes";
    typeElement.textContent = "Automatic";
    fuelElement.textContent = "Deisel";
    ratingElement.textContent = "4.4";
    priceElement.textContent = "920 /- per Km";

    itemId = "audi";
}

function car4()
{
    carElement4.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/balenoJs.png";
    imgElement.classList.add("extra");

    modelElement.textContent = "Baleno";
    companyElement.textContent = "Suziki";
    yearElement.textContent = "2022";
    acElement.textContent = "Yes";
    srElement.textContent = "Yes";
    typeElement.textContent = "Automatic";
    fuelElement.textContent = "Petrol";
    ratingElement.textContent = "4.8";
    priceElement.textContent = "1500 /- per km";

    itemId = "baleno";
}

function car5()
{
    carElement5.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/skodaJs.png";
    imgElement.classList.add("extra");

    modelElement.textContent = "Octavia";
    companyElement.textContent = "Skoda";
    yearElement.textContent = "2014";
    acElement.textContent = "No";
    srElement.textContent = "No";
    typeElement.textContent = "Manual";
    fuelElement.textContent = "Deisel";
    ratingElement.textContent = "4.5";
    priceElement.textContent = "900 /- per Km";

    itemId = "skoda";
}

function car6()
{
    carElement6.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/jaguarJs.png";
    imgElement.classList.add("extra");

    modelElement.textContent = "F Type";
    companyElement.textContent = "Jaguar";
    yearElement.textContent = "2015";
    acElement.textContent = "Yes";
    srElement.textContent = "Yes";
    typeElement.textContent = "Manual";
    fuelElement.textContent = "Deisel";
    ratingElement.textContent = "4.0";
    priceElement.textContent = "745 /- per Km";

    itemId = "jaguar";
}

function car7()
{
    carElement7.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement8.classList.remove("carPageB-active");

    imgElement.src = "assets/fordJs.png";
    imgElement.classList.remove("extra");

    modelElement.textContent = "Mustang";
    companyElement.textContent = "Ford";
    yearElement.textContent = "2019";
    acElement.textContent = "Yes";
    srElement.textContent = "Yes";
    typeElement.textContent = "Manual";
    fuelElement.textContent = "Petrol";
    ratingElement.textContent = "4.6";
    priceElement.textContent = "820 /- per Km";

    itemId = "ford";
}

function car8()
{
    carElement8.classList.add("carPageB-active");

    carElement1.classList.remove("carPageB-active");
    carElement2.classList.remove("carPageB-active");
    carElement3.classList.remove("carPageB-active");
    carElement4.classList.remove("carPageB-active");
    carElement5.classList.remove("carPageB-active");
    carElement6.classList.remove("carPageB-active");
    carElement7.classList.remove("carPageB-active");

    imgElement.src = "assets/lrJs.png";
    imgElement.classList.remove("extra");

    modelElement.textContent = "Defender";
    companyElement.textContent = "Land Rover";
    yearElement.textContent = "2020";
    acElement.textContent = "No";
    srElement.textContent = "No";
    typeElement.textContent = "Manual";
    fuelElement.textContent = "Deisel";
    ratingElement.textContent = "4.3";
    priceElement.textContent = "1200 /- per day";

    itemId = "defender";
}

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

function button1()
{
    if(cartArray.length > 0)
    {
        div2.classList.add("check1");
        div1.classList.remove("check1");

        div2.classList.remove("check2");
        div1.classList.add("check2");
    }
    else
    {
        alert("No items in the cart !!!");
    }
}

function button2()
{
    div1.classList.remove("check2");
    div2.classList.add("check2");

    div1.classList.add("check1");
    div2.classList.remove("check1");
}

function decrementDynamic(carSelected)
{
    // let priceTagElement = document.getElementById("priceTag");
    carSelected.count = carSelected.count - 1;
    let counterId = carSelected.uniqueId + "CounterId";
    let conterTagElement = document.getElementById(counterId);
    conterTagElement.textContent = carSelected.count;

    let priceId = carSelected.uniqueId + "PriceId";
    let priceTagElement = document.getElementById(priceId);
    carSelected.displayPrice = carSelected.displayPrice - carSelected.prices;
    priceTagElement.textContent = carSelected.displayPrice + " /-";

    billCal = billCal - carSelected.prices;
    billAmount.textContent = billCal + " /-";
    taxCal = Math.round(billCal*(18/100));
    taxAmount.textContent = taxCal + " /-";
    totalAmount.textContent = billCal + taxCal + " /-";
}

function incrementDynamic(carSelected)
{
    // let priceTagElement = document.getElementById("priceTag");
    carSelected.count = carSelected.count + 1;
    let counterId = carSelected.uniqueId + "CounterId";
    let conterTagElement = document.getElementById(counterId);
    conterTagElement.textContent = carSelected.count;

    let priceId = carSelected.uniqueId + "PriceId";
    let priceTagElement = document.getElementById(priceId);
    carSelected.displayPrice = carSelected.displayPrice + carSelected.prices;
    priceTagElement.textContent = carSelected.displayPrice + " /-";

    billCal = billCal + carSelected.prices;
    billAmount.textContent = billCal + " /-";
    taxCal = Math.round(billCal*(18/100));
    taxAmount.textContent = taxCal + " /-";
    totalAmount.textContent = billCal + taxCal + " /-";
}

function deleteItem(delUnq,cart,all)
{
    for(let z = 0;z<cart.length;z++)
    {
        if(cart[z].uniqueId === delUnq)
        {
            let totalCarPrice = cart[z].count * cart[z].prices;
            billCal = billCal - totalCarPrice;
            billAmount.textContent = billCal + " /-";
            taxCal = Math.round(billCal*(18/100));
            taxAmount.textContent = taxCal + " /-";
            totalAmount.textContent = billCal + taxCal + " /-";
            cart[z].count = 1;
            cart[z].displayPrice = cart[z].prices;
            all.push(cart[z]);
            cart.splice(z,1);
            addToTheCart(cart)
        }
    }
    if(cartArray.length == 0)
    {
        billingElement.classList.add("d-none");
    }
}

let mainDiv = document.getElementById("crt");
let subDiv = document.getElementById("cartItems");


function addToTheCart(element)
{
    mainDiv.innerHTML = '';
    for(let k = 0;k < element.length ; k++)
    {
        let subDiv = document.createElement("div");
        subDiv.classList.add("d-flex","flex-row");

        let firstDiv = document.createElement("div");
        firstDiv.classList.add("menu1Item","d-flex","flex-row")
        let img1 = document.createElement("img");
        img1.src = element[k].imgUrl;
        img1.classList.add("cartItemImg");
        firstDiv.appendChild(img1);
        let fir1Div = document.createElement("div");
        fir1Div.classList.add("d-flex","flex-column","justify-content-center");
        let pOne1 = document.createElement("p");
        pOne1.classList.add("cartItemH");
        pOne1.textContent = element[k].name;
        let pOne2 = document.createElement("p");
        pOne2.classList.add("cartItemRate");
        pOne2.textContent = element[k].rating;
        fir1Div.appendChild(pOne1);
        fir1Div.appendChild(pOne2);
        firstDiv.appendChild(fir1Div);

        subDiv.appendChild(firstDiv);

        let secondDiv = document.createElement("div");
        secondDiv.classList.add("menu2Item","d-flex","flex-row","justify-content-center");
        let aMinus = document.createElement("a");
        let iconMinus = document.createElement("i");
        iconMinus.classList.add("fa-solid","fa-minus","plus-minus-icon");
        aMinus.appendChild(iconMinus);
        let pTwo = document.createElement("p");
        pTwo.classList.add("cartCount");
        pTwo.id = element[k].uniqueId + "CounterId";
        pTwo.textContent = element[k].count;
        let aPlus = document.createElement("a");
        let iconPlus = document.createElement("i");
        iconPlus.classList.add("fa-solid","fa-plus","plus-minus-icon");
        aPlus.appendChild(iconPlus);
        secondDiv.appendChild(aMinus);
        secondDiv.appendChild(pTwo);
        secondDiv.appendChild(aPlus);
        
        

        subDiv.appendChild(secondDiv);

        let thirDiv = document.createElement("div");
        thirDiv.classList.add("menu3Item","d-flex","flex-row","justify-content-center")
        let iconCross = document.createElement("i");
        iconCross.classList.add("fa-solid","fa-xmark","crossEdit");
        let aCross = document.createElement("a");
        aCross.appendChild(iconCross);
        thirDiv.appendChild(aCross);
        aCross.onclick = function(){
            console.log(element[k]);
            deleteItem(element[k].uniqueId,cartArray,ItemsArray);
        }

        subDiv.appendChild(thirDiv);

        let fourDiv = document.createElement("div");
        fourDiv.classList.add("menu4Item");
        pFour = document.createElement("p");
        pFour.id = element[k].uniqueId + "PriceId";
        pFour.textContent = element[k].prices + " /-";
        fourDiv.appendChild(pFour);
        aMinus.onclick = function(){
            if(element[k].count != 1)
            {
                decrementDynamic(element[k]);
            }
        }
        aPlus.onclick = function(){
            incrementDynamic(element[k]);
        }

        subDiv.appendChild(fourDiv);

        let hrLine = document.createElement("hr");
        hrLine.classList.add("cartHrEdit","extraCartHrEdit");

        mainDiv.appendChild(subDiv);

        mainDiv.appendChild(hrLine);
        }
    
}

function addButton()
{
    for(let i = 0;i < ItemsArray.length;i++)
    {
        if(ItemsArray[i].uniqueId === itemId)
        {
            alert("Car is added to the cart!!!");
            billCal = billCal + ItemsArray[i].prices;
            billAmount.textContent = billCal + " /-";
            taxCal = Math.round(billCal*(18/100));
            taxAmount.textContent = taxCal + " /-";
            totalCal = billCal + taxCal;
            totalAmount.textContent = totalCal + " /-";
            cartArray.push(ItemsArray[i]);
            addToTheCart(cartArray);
            ItemsArray.splice(i,1);
        }
    }
}

