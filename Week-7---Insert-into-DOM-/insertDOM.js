function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 

  let dataInput = document.getElementById('myInput').value;
  
  //Step 2: Create a text node containing that value

  let textNode = document.createTextNode(dataInput);

  //Step 3: Create a new li element and append the text node to it

  let appendElement = document.createElement("li");
  appendElement.appendChild(textNode);

  //Step 4: Append the li element to the existing myTODOs element.
  
  document.getElementById('myTODOs').appendChild(appendElement);

}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
}
