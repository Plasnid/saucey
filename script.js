console.log("%cthe script is attached!", "color: red;");

// this is a single line comment

/**
 * this is a multi line comment
 */
let pageBody = document.querySelector("body");
const dishName = "Porotta";
const prepTimeInMinutes = 35;
const panCookTimeInMinutes = 3;

// * all purpose flour, water, sugar, cooking oil, salt
let ingredients = ["all purpose flour", "water", "sugar", "cooking oil", "salt","tumeric"];
console.log(ingredients);
console.log(ingredients[3]);

//* utility for adding items to screen
//* function functionName(parameters go here){}
function addTextToScreen(htElement, htText, styleName){
    let tag = document.createElement(htElement);
    tag.classList.add(styleName);
    tag.innerText = htText;
    pageBody.appendChild(tag);
}

function populateList(listTag, itemList){
    console.log("reached populateList");
    //for loop has 3 things, a start, an end, an iteration
    for(let i=0; i<itemList.length;i++){
        console.log(`%c${itemList[i]}`, "color: orange");
        let itemTag = document.createElement("li");
        itemTag.innerText = itemList[i];
        listTag.appendChild(itemTag);
    }
}

//dom manipulation

console.log(pageBody);
addTextToScreen("h1", dishName,"titleStyling");

let prepTime = `Preparation Time: ${prepTimeInMinutes} minutes`;
addTextToScreen("h2", prepTime,"titleStyling");

//list ingredients on screen
let ingredientDisplay = document.createElement("ul");
pageBody.appendChild(ingredientDisplay);
populateList(ingredientDisplay, ingredients);