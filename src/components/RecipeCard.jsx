import style from "./RecipeCard.module.css";

export default function RecipeCard({
  name,
  cookingTime,
  difficulty,
  ingredients,
  description,
}) {
  return (
    <div className={style.card}>
      <h3 className={style.title}>{name}</h3>
      <div className={style.metaFlex}>
        <span className={`${style.badge} ${style.timeBadge}`}>
          Cooking time: {cookingTime}
        </span>
        <span className={`${style.badge} ${style[`${difficulty}Badge`]}`}>
          Difficulty: {difficulty}
        </span>
      </div>
      <p className={style.description}>{description}</p>

      <div className={style.ingredientsSection}>
        <h4 className={style.ingredientsTitle}>Ingredients</h4>
        <ul className={style.list}>
          {ingredients.map((i) => (
            <li key={i} className={style.listItem}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
