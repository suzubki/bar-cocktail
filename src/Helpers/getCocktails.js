import axios from "axios"

const getCocktails = async () => {
    const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    const { data } = await resp

    return data.drinks
}

export default getCocktails