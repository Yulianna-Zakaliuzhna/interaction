const usercard = [
  {
    id: 1,
    name: `Nathan Morene`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-1.jpg`,
    cssClass: 'usercard'
  },
  {
    id: 2,
    name: `Kaloh Dinnerware Set - Turquoise`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-2.jpg`,
    cssClass: 'usercard-opposite'
  },
  {
    id: 3,
    name: `Kaloh Dinnerware Set - Turquoise`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-3.jpg`,
    cssClass: 'usercard'
  },
  {
    id: 4,
    name: `Kaloh Dinnerware Set - Turquoise`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-4.jpg`,
    cssClass: 'usercard-opposite'
  },
  {
    id: 5,
    name: `Kaloh Dinnerware Set - Turquoise`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-2.jpg`,
    cssClass: 'usercard'
  },
  {
    id: 6,
    name: `Kaloh Dinnerware Set - Turquoise`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-2.jpg`,
    cssClass: 'usercard-opposite'
  },
]


function getUsercardAsHtmlString(usercard) {

  if(usercard.cssClass === "usercard") {
    return `<div class= "${usercard.cssClass}" >   
            <nav><img class="headshot" src="${usercard.photo}" alt="${usercard.name}"></nav>
              <ul>
                <li><h3> ${usercard.name} </h3></li>
                <li><h4> ${usercard.description}</h4></li>
                
              </ul>
          
           </div>`;
  } else {
    return `<div class= "${usercard.cssClass}" >   
              <ul>
                <li><h3> ${usercard.name} </h3></li>
                <li><h4> ${usercard.description}</h4></li>
                
              </ul>
            <nav><img class="headshot" src="${usercard.photo}" alt="${usercard.name}"></nav>

           </div>`;
  }

  
}
function renderUsercard(arr) {

  //* 1. map() Array to a new Array
  const arrOfHtml = arr.map(getUsercardAsHtmlString);

  //* 2. join() Array into a String
  const strOfHtml = arrOfHtml.join('\n');

  //* 3. innerHTML String into Elements
  document.getElementById('usercards').innerHTML = strOfHtml;
}
var numOfItems = 2;
currentProducts = [];

$("#loadMore").click(() =>{
  if (numOfItems != 6){
    numOfItems += 2;
     currentProducts = usercard.slice(0,numOfItems);
     renderUsercard(currentProducts);
     }
  if(numOfItems == 6){
     $("#loadMore").css("visibility", "hidden");
   }
  });

renderUsercard(usercard.slice(0,numOfItems));

