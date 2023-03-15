import {eventHandler, readBody, sendError} from "h3";
import {readFile, writeFile} from "fs/promises";
import {authError} from "~/apiMessage/apiMessage";
import {getToken} from "#auth";
import Recipe from "~/classes/Recipe";
import Ingredient from "~/classes/Ingredient";

export default eventHandler(async (event ): Promise<any> => {
    const token = await getToken({event})
    if (!token) {
        sendError(event, authError());
        return;
    }

    const allIngredients: Ingredient[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));

    const receivedIngredient = await readBody(event)



   await writeFile("./storage/recipes.json",JSON.stringify(allIngredients),"utf8")

    return "Ajouté avec succès"
});