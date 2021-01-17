import React from 'react'
import styles from './recipe.module.css'

const recipes=({title,cal,image,ingredients})=>{
    return(
        <div>
       
        <div className={styles.recipe}>
        <h1>{title}</h1>
        <ul>
            {ingredients.map(ingredient =>(
                <li key={ingredient.weight}>{ingredient.text}</li>
            ))}
        </ul>
        <p>{cal}</p>
        <img className={styles.image} src={image} alt=""/>
        </div>
        </div>
    )
}
export default recipes