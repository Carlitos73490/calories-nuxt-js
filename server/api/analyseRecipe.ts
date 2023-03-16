import {eventHandler, readBody, sendError} from "h3";
import {readFile, writeFile} from "fs/promises";
import {authError} from "~/apiMessage/apiMessage";
import {getToken} from "#auth";
import Recipe from "~/classes/Recipe";
import Analyse from "~/classes/Analyse";

export default eventHandler(async (event ): Promise<any> => {
    const token = await getToken({event})
    if (!token) {
        sendError(event, authError());
        return;
    }

    const ingredients : IngredientModel[] = JSON.parse(await readFile("./storage/ingredients.json", "utf8"));

    const ingredientsWithQuantity : IngredientQuantityAssociationModel[] = []

    const tempRecipe :  RecipeModel = await readBody(event)

    for (const ingr of tempRecipe.ingredients) {


        const ingredient = ingredients.find((ingredient) => ingredient.id ===  ingr.id)
        if(ingredient === undefined){
            return
        }
        const ingredientQuantityAssociationModel : IngredientQuantityAssociationModel= {
            id : 'Temp',
            name: ingredient.name,
            quantity :  ingr.quantity,
            description : ingredient.description,
            unit: ingredient.unit,
            nutrition : ingredient.nutrition
        }
        ingredientsWithQuantity.push(ingredientQuantityAssociationModel)
    }


    return JSON.stringify(new Analyse("Temp",ingredientsWithQuantity))
});