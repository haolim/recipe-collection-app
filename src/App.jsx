import "./App.css";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";

// In App.jsx
const breakfastRecipes = [
  {
    name: "Fluffy Pancakes",
    cookingTime: "20 minutes",
    difficulty: "easy",
    ingredients: [
      "2 cups flour",
      "2 eggs",
      "1.5 cups milk",
      "2 tbsp sugar",
      "2 tsp baking powder",
    ],
    description: "Light and fluffy pancakes perfect for weekend breakfast!",
  },
  {
    name: "Avocado Toast",
    cookingTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "Salt & pepper",
      "Red pepper flakes",
      "Lemon juice",
    ],
    description: "A healthy and delicious breakfast packed with nutrients.",
  },
];
const lunchRecipes = [
  {
    name: "Grilled Chicken Caesar Salad",
    cookingTime: "25 minutes",
    difficulty: "medium",
    ingredients: [
      "2 chicken breasts",
      "1 head romaine lettuce",
      "1/2 cup croutons",
      "1/4 cup parmesan cheese",
      "1/3 cup Caesar dressing",
    ],
    description:
      "Crisp lettuce and juicy grilled chicken tossed in a classic creamy dressing.",
  },
  {
    name: "Caprese Panini",
    cookingTime: "15 minutes",
    difficulty: "easy",
    ingredients: [
      "1 ciabatta roll",
      "2 slices fresh mozzarella",
      "1 ripe tomato, sliced",
      "4-5 fresh basil leaves",
      "2 tbsp basil pesto",
    ],
    description:
      "A warm, pressed Italian sandwich with melted mozzarella and fresh tomatoes.",
  },
];

const dinnerRecipes = [
  {
    name: "Creamy Garlic Parmesan Salmon",
    cookingTime: "30 minutes",
    difficulty: "medium",
    ingredients: [
      "2 salmon fillets",
      "3 cloves garlic, minced",
      "1/2 cup heavy cream",
      "1/4 cup grated parmesan",
      "2 cups fresh spinach",
    ],
    description:
      "Pan-seared salmon smothered in a rich, velvety garlic and spinach cream sauce.",
  },
  {
    name: "Classic Beef Stir-Fry",
    cookingTime: "20 minutes",
    difficulty: "medium",
    ingredients: [
      "450g flank steak, sliced",
      "2 cups broccoli florets",
      "1 bell pepper, sliced",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
    ],
    description:
      "Tender strips of beef and crisp vegetables tossed in a quick, savory sauce.",
  },
];

function App() {
  return (
    <div className="app">
      <Header title="My Recipes" subtitle="Breakfast, Lunch, and Dinner" />
      <main className="content">
        <CategorySection category="Breakfast Recipes">
          {breakfastRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.name}
              cookingTime={recipe.cookingTime}
              difficulty={recipe.difficulty}
              ingredients={recipe.ingredients}
              description={recipe.description}
            />
          ))}
        </CategorySection>
        <CategorySection category="Lunch Recipes">
          {lunchRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.name}
              cookingTime={recipe.cookingTime}
              difficulty={recipe.difficulty}
              ingredients={recipe.ingredients}
              description={recipe.description}
            />
          ))}
        </CategorySection>
        <CategorySection category="Dinner Recipes">
          {dinnerRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.name}
              cookingTime={recipe.cookingTime}
              difficulty={recipe.difficulty}
              ingredients={recipe.ingredients}
              description={recipe.description}
            />
          ))}
        </CategorySection>
      </main>

      <Footer name="ABC"></Footer>
    </div>
  );
}

export default App;
