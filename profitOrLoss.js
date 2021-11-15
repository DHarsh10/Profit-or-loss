var initialPrice = document.querySelector("#ini_Price");
var numberOfStocks = document.querySelector("#stocks_Num");
var currentPrice = document.querySelector("#curr_Price");
var checkButton = document.querySelector("#btn");
var outputOnDOM = document.querySelector("#output");


function calculateProfitOrLoss(costPrice, sellingPrice, totalStocks) {
    var profit = (sellingPrice - costPrice) * totalStocks;
    var profitPercentage = (profit / costPrice) * 100;
    var loss = (costPrice - sellingPrice) * totalStocks;
    var lossPercentage = (loss / costPrice) * 100;

    if (sellingPrice > costPrice) {
        outputOnDOM.innerText = `Profit is ${profit} Rs and the Profit Percentage is ${profitPercentage} % 🤑🤑` 
    } else if (costPrice > sellingPrice) {
        outputOnDOM.innerText = `Loss is ${loss}Rs and the Loss Percentage is ${lossPercentage}% 😪😪`
    } else {
        outputOnDOM.innerText = `No pain, No gain.....  No gain, No pain 😈😈`
    }
}


function clickHandler () {
    var costPrice  = Number(initialPrice.value);
    var totalStocks = Number(numberOfStocks.value);
    var sellingPrice = Number(currentPrice.value);

    if (costPrice && totalStocks && sellingPrice) {
        calculateProfitOrLoss(costPrice, sellingPrice, totalStocks);
    } else {
        outputOnDOM.innerText = `Enter all the inputs 🤷‍♂️🤷‍♂️`
    }
}

checkButton.addEventListener("click", clickHandler);