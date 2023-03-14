import {defineEventHandler} from "h3";
import Recipe from "~/classes/Recipe";
import {readFile} from "fs/promises";


export default defineEventHandler(async (event): Promise<RecipeModel | undefined> => {

    if (event.context.params === undefined) {
        return
    }


    const {recipeId} = event.context.params;
    const data : RecipeModel[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));
    const result = data.find((recipe)=>{return recipe.title === recipeId})

    if (!result){
        event.node.res.statusCode = 404
    } else {
        return result
    }
});