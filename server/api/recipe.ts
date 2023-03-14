import {defineEventHandler} from "h3";
import Recipe from "~/classes/Recipe";
import * as fs from "fs";

export default defineEventHandler((event): any => {
    // Grab the parameter from the route
    if(event.context.json === undefined){
        return
    }


    const recette : Recipe = new Recipe()

    const recipesData = fs.readFileSync('~/storage/recipes.json');
    const recipesList = recipesData.toJSON()

});