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

    const data : IngredientModel[] = JSON.parse(await readFile("./storage/ingredients.json", "utf8"));
    const element : IngredientModel |undefined   =  data.find((ingredient)=>{return ingredient.id === id})

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
            await writeFile("./storage/ingredient.json",JSON.stringify(data),"utf8")
            break;
        case "PUT":
            // eslint-disable-next-line no-case-declarations
            const newElement = await readBody(event)

            element.name = newElement.name
            element.unit= newElement.title
            element.quantity= newElement.quantity

            await writeFile("./storage/recipes.json",JSON.stringify(data),"utf8")
            break;
    }
})

