import check from './assets/check.png'

function MyRecipeComponent({label, image, calories, ingredients, mealType, cuisineType, source

}) {
    return(<div>
        <div className="recipeCard">
            <h2 className='recipeHeading'>{label}</h2>
            <img className="itemImg"
            src={image} alt="recipe"
            width="250px"
        />

        <p>Calories: {calories.toFixed()}</p>
        <p>Meal: {mealType}</p>
        <p>Cuisine: {cuisineType}</p>

        <h3>Ingredients</h3>

        <ul className='recipeList'>
            {ingredients.map(((ingredient, index) => (
        <li key={index} className="ingredientItem">
                    <img className='icon' src={check} alt="check icon"  />
                    {ingredient}
                </li>
            )))}
        </ul>
        
        <a href={source} target="_blank" rel="noreferrer" className='originalUrl'>
        View Full Recipe
        </a>
        </div>
    </div>
    )
}

export default MyRecipeComponent;