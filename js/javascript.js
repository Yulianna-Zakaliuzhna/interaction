const usercard = [
  {
    id: 1,
    name: `Nathan Morene`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-1.jpg`,
  },
  {
    id: 2,
    name: `Kaloh Dinnerware Set - Turquoise`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis tempore nesciunt vero ad soluta adipisci explicabo ducimus fugiat, non rerum facere ipsa quaerat fuga numquam quos ex. Velit, cupiditate.`,
    photo: `img/headshot-2.jpg`,
  },
]


function getUsercardAsHtmlString(usercard) {

  return `<div class= "usercard" >   
            <img class="headshot" src="${usercard.photo}" alt="${usercard.name}">
              <ul>
                <li class="h3"> ${usercard.name} </li>
                <li class="h4"> ${usercard.description} </li>
                
              </ul>
          
           </div>`;
}
function renderUsercard(arr) {

  //* 1. map() Array to a new Array
  const arrOfHtml = arr.map(getUsercardAsHtmlString);

  //* 2. join() Array into a String
  const strOfHtml = arrOfHtml.join('\n');

  //* 3. innerHTML String into Elements
  document.getElementById('usercard').innerHTML = strOfHtml;
}

$("#loadMore").click(() =>{
  if (id != 10){
     id += 5;
     currentProducts = usercard.slice(0,id);
     renderUsercard(currentUsercard);
     }
   if(id == 3){
     $("#loadMore").css("visibility", "hidden");
   }
  });

renderUsercard(usercard.slice(0,id));
