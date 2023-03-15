import {eventHandler, getMethod, getRouterParam, readBody, sendError} from "h3";
import {readFile, writeFile} from "fs/promises";
import { getToken } from '#auth'
import {authError, IdError, NotFoundArticleError} from "~/apiMessage/apiMessage";

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

    const data : RecipeModel[] = JSON.parse(await readFile("./storage/recipes.json", "utf8"));
    const element : RecipeModel |undefined   =  data.find((recipe)=>{return recipe.id === id})

    if (element === undefined){
        sendError(event,NotFoundArticleError(id));
        return;
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
})

