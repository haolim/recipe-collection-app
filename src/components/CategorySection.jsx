import style from "./CategorySection.module.css";

export default function CategorySection( {
    category,
    children
} ) {

    return (
        <div>
            <h3 className={style.title}>
                {category}
            </h3>
            <div className={style.categoryContainer}>
                {children}
            </div>

        </div>
    );

};