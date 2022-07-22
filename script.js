/* fact generator */
var factList = [
  "Black people are incarcerated in state prisons at a rate nearly 5x that of white people",
  "The U.S. is home to 4 percent of the world’s population,yet the US is home to 16% of all incarcerated people in the world.",
  "One out of every 5 people imprisoned across the world is incarcerated in the United States. In 2018 in the US, there were 698 people incarcerated per 100,000; this includes the incarceration rate for adults or people tried as adults.",
  "The United States locks up more people per capita than any other country. The U.S. is currently imprisoning people at a rate six times greater than Canada and 13 times greater than Japan",
"It costs an average of about $106,000 per year to incarcerate an inmate in prison in California.",];
  
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


