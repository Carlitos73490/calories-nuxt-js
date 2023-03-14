import {defineEventHandler, getMethod, getRouterParam, readBody} from "h3";
import {readFile, writeFile} from "fs/promises";


export default defineEventHandler(async (event): Promise<RecipeModel | undefined> => {

const recipeId : string = getRouterParam(event,"recipeId")

if(!recipeId){
    return
}

const data : RecipeModel[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));
const element : RecipeModel |undefined   =  data.find((recipe)=>{return recipe.title === recipeId})

    if (element === undefined){
        return
    }


    let index
switch (getMethod(event)) {
 case "GET":
       return element
case "DELETE":
        index = data.indexOf(element);
        if (index > -1) {
            data.splice(index, 1);
        }
    await writeFile("./storage/recipes.json",JSON.stringify(data),"utf8")
    break;
case "PUT":
    // eslint-disable-next-line no-case-declarations
     const newElement = await readBody(event)

    element.author = newElement.author
    element.title= newElement.title
    element.steps= newElement.steps
    element.ingredients= newElement.ingredients

    await writeFile("./storage/recipes.json",JSON.stringify(data),"utf8")
    break;

}
});