import {defineEventHandler, readBody} from "h3";
import Recipe from "~/classes/Recipe";
import * as fs from "fs";
import {readFile, writeFile} from "fs/promises";

export default defineEventHandler(async (event): Promise<any> => {
    // Grab the parameter from the route



    const body = await readBody(event)
    console.log(body)
    const data: RecipeModel[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));

    data.push(body)

    const result = await writeFile("./storage/recipes.json",JSON.stringify(data),"utf8")
 return result
});