// console.log('Meal Db js added');
const loadMeal = (searchText) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res=>res.json())
  .then(data => displayMeals(data.meals));
}


const displayMeals=(meals)=>{
  const container = document.getElementById('meals-container');
  container.innerHTML='';
  meals.forEach(element => {
    console.log(element)
    const mealDiv= document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML=`
          <div class="card h-100">
          <img src="${element.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

          <button onclick='loadMealDetails(${element.idMeal})' type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#mealDetailes">
          Details
          </button>
          </div>
    `;
    container.appendChild(mealDiv);

  })
}

const searchMeal =()=>{
  // console.log('btn-clicked');
  const searchText = document.getElementById('searchField').value;
  //console.log(searchText);
  loadMeal(searchText);
}


const loadMealDetails= (idMeal)=>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMealDetails(data.meals[0]));
  // console.log(idMeal);
}



// async await practice 
const loadMealDetails2 = async(idMeal)=> {
 try {
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const res= await fetch(url)
  const data =await  res.json();
  displayMealDetails(data);
 }
 catch(error)
 {
  console.log(error);
 }

}



const displayMealDetails = (meal) =>{
   document.getElementById('mealDetailesLabel').innerText=meal.strMeal;
   document.getElementById('mealDetailesBody').innerHTML=`
   <img class='img-fluid' src="${meal.strMealThumb}" alt="">
   `;
}

loadMeal('fish');



