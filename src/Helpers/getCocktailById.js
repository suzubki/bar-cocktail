import axios from "axios"

const getCocktailsById = async (id) => {
    const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const { data } = await resp

    return data.drinks
}

export default getCocktailsById