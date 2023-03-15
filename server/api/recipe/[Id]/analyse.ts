import {eventHandler, getMethod, getRouterParam, readBody, sendError} from "h3";
import {readFile, writeFile} from "fs/promises";
import { getToken } from '#auth'
import {authError, IdError, NotFoundArticleError} from "~/apiMessage/apiMessage";
import Analyse from "~/classes/Analyse";
import Ingredient from "~/classes/Ingredient";

export default eventHandler(async (event) => {
    const token = await getToken({event})
    if (!token) {
        sendError(event, authError());
    }
    const id : string = getRouterParam(event,"Id")
    if(!id){
        sendError(event,IdError());
        return;
    }

    const recipes : RecipeModel[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));

    const recipe : RecipeModel |undefined   =  recipes.find((recipe)=>{return recipe.id === id})

    if (recipe === undefined){
        sendError(event,NotFoundArticleError(id));
        return;
    }

    const ingredients : IngredientModel[] = JSON.parse(await readFile("./storage/ingredients.json", "utf8"));

    const ingredientsWithQuantity : IngredientQuantityAssociationModel[] = []



for (const ingr of recipe.ingredients) {


        const ingredient = ingredients.find((ingredient) => ingredient.id ===  ingr.id)
        if(ingredient === undefined){
            return
        }
        const ingredientQuantityAssociationModel : IngredientQuantityAssociationModel= {
            id : id,
            name: ingredient.name,
            quantity :  ingr.quantity,
            description : ingredient.description,
            unit: ingredient.unit,
            nutrition : ingredient.nutrition
        }
        ingredientsWithQuantity.push(ingredientQuantityAssociationModel)
    }


    return JSON.stringify(new Analyse(recipe.id,ingredientsWithQuantity))
})

