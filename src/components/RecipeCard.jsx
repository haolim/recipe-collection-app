import style from "./RecipeCard.module.css";

export default function RecipeCard( {
    name,
    cookingTime,
    difficulty,
    ingredients,
    description,
} ) {
    return (
        <div className={style.card}>
            <h3 className={style.title}>{name}</h3>
            <div className={style.metaFlex}>
                Cooking time: {cookingTime}
                Difficulty: {difficulty}</div>
            <div className={style.ingredientsSection}>
                Ingredients: {ingredients.map( (i) => <ul className={style.list}><li key={i} className={style.listItem}>{i}</li></ul>)}
            </div>
            <div className={style.description}>Description: {description}</div>
        </div>
    );
};