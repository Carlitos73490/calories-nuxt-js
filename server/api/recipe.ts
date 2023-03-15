import {eventHandler, readBody, sendError} from "h3";
import {readFile, writeFile} from "fs/promises";
import {authError} from "~/apiMessage/apiMessage";
import {getToken} from "#auth";

export default eventHandler(async (event ): Promise<any> => {
    const token = await getToken({event})
    if (!token) {
        sendError(event, authError());
        return;
    }

    // Grab the parameter from the route
    const body = await readBody(event)
    console.log(body)
    const data: RecipeModel[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));

    data.push(body)

   await writeFile("./storage/recipes.json",JSON.stringify(data),"utf8")

    return "Ajouté avec succès"
});