import React from 'react'
import TextModal from '../Atoms/TextModal'

const ItemDescriptionModal = ({ url, name, instructions, recipeUpdate, cocktailDescription }) => {

	// function to get similar Keys using 'startsWith' method 
	function listOfDetails(firstLetters) {
		const moreDetails = []
		Object.entries(cocktailDescription).forEach(([key, value]) => {
			if (key.startsWith(firstLetters)) {
				moreDetails.push(value)
			}
		})

		return moreDetails.filter(el => el !== null && el !== '')
	}

	//join ingredients and measure, output expect: Ingredient --> Measure
	function howToPrepare() {
		const ingred = listOfDetails("strIngred")
		const measur = listOfDetails("strMeasu")

		const newarr = []
		for (let i = 0; i < ingred.length; i++) {
			newarr.push(`${ingred[i]} --> ${measur[i]}`)
		}

		return newarr
	}


	return (
		<>
			<center>
				<img src={url} alt={name} style={{ width: "80%" }}></img>
			</center>
			<br />

			<TextModal value={instructions} subtitle={"Instructions"} /><br />
			<TextModal value={howToPrepare().join(' || ')} subtitle={"Ingredients and measure"} /><br />
			<TextModal value={recipeUpdate} subtitle={"Latest update recipe"} /><br />
		</>
	)
}

export default ItemDescriptionModal