// Change the background color to silver
document.body.style.backgroundColor = "silver";
// Change the font color of the h1 title tag to green
var titleElement = document.getElementById("title");
titleElement.style.color = "green";
// Change the font case of the h3 title tags to uppercase
var h3element = document.getElementsByTagName("h3");
for (var i = 0; i < h3element.length; i++) {
  h3element[i].style.textTransform = "uppercase";
}
// Add one more fruit to the fruits list
var fruitsList = document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.textContent = "Pineapples";
fruitsList.appendChild(newFruit);
// Add one more vegetable to the vegetables list
var vegetablesList = document.getElementById("vegList");
var newVegetable = document.createElement("li");
newVegetable.textContent = "Cabbages";
vegetablesList.appendChild(newVegetable);