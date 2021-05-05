let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  // fetch all toys
  function fetchAllToys(){
    fetch("http://localhost:3000/toys")
    .then(function(response) {
      return response.json(); 
    })
    .then(toy => toy.forEach(toy => renderToys(toy))); 
    // renderToys(toy);
  }

  fetchAllToys();

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// render data
function renderToys(toy) {
  let toyContainer = document.createElement('div.card'); // class = 'card'
  toyContainer.innerHTML = `
      <h2> ${toy.name} </h2>
      <img src = "${toy.image}" />
      <p></p>
      <button></button>
  ` 
  console.log(toyContainer.innerHTML);
  document.querySelector('#toy-collection').appendChild(toyContainer);
}

function showToys(toy) {

}

{/* <div class="card">
<h2>Woody</h2>
<img src="[toy_image_url]" class="toy-avatar" />
<p>4 Likes </p>
<button class="like-btn" id="[toy_id]">Like <3</button>
</div>  */}

// GET data using fetch data from api
// declare a function to render data
  // create a const = toyName
  // create a const = toyImg
  // Append name of toy to new 'div'
  // Append img to 'img'

// declare function to record 'like' button
  // POST data using fetch
  // Update and append 'like' to <p> 