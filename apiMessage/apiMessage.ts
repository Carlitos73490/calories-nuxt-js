import {createError, H3Error} from "h3";

export function authError() : H3Error {
   return createError({
        statusCode: 401,
        statusMessage: 'Utilisateur inconnu'
    });
}

export  function IdError() : H3Error {
   return createError({
        statusCode: 404,
        statusMessage: "Id de l'article attendu"
    });
}

export function NotFoundArticleError(id : string) : H3Error{
    return createError({
        statusCode: 404,
        statusMessage: `la recette ${id} n'existe pas`
    });
}

export function AddArticleSuccess(id : string) : H3Error{
    return createError({
        statusCode: 200,
        statusMessage: `la recette ${id} a été ajouté avec success`
    });
}

