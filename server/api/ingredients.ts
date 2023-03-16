import {eventHandler, readBody, sendError} from "h3";
import {readFile, writeFile} from "fs/promises";
import {authError} from "~/apiMessage/apiMessage";
import {getToken} from "#auth";
import Recipe from "~/classes/Recipe";

export default eventHandler(async (event ): Promise<any> => {
    const token = await getToken({event})
    if (!token) {
        sendError(event, authError());
        return;
    }
   return JSON.parse(await readFile("./storage/ingredients.json", "utf8"));
});