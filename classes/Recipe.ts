export default class Recipe implements  RecipeModel{
    "title": string;
    "author": string;
    "publication_date": string;
    "ingredients": Array<any>;
    "steps": Array<any>;
}