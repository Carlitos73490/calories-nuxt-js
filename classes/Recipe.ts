import recipe from "~/server/api/recipe";

export default class Recipe implements  RecipeModel{

    private _id : string
    private _title: string;
    private _author: string;
    private _publication_date : number;
    private _ingredients: Array<string>;
    private _steps: Array<string>;

    constructor(jsonObject : RecipeModel) {

        this._id =  crypto.randomUUID()
        this._title = jsonObject.title
        this._author = jsonObject.author
        this._publication_date = Date.now()
        this._ingredients  = jsonObject.ingredients
        this._steps = jsonObject.steps
    }



    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get steps(): Array<any> {
        return this._steps;
    }

    set steps(value: Array<any>) {
        this._steps = value;
    }
    get ingredients(): Array<string> {
        return this._ingredients;
    }

    set ingredients(value: Array<string>) {
        this._ingredients = value;
    }
    get publication_date(): number {
        return this._publication_date;
    }

    set publication_date(value: number) {
        this._publication_date = value;
    }
    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    public ToModel() : RecipeModel{
        const recipeModel : RecipeModel = {
           id :this.id,
            title : this.title,
            author : this.author,
            steps : this.steps,
            publication_date : this.publication_date,
            ingredients : this.ingredients
        }
        return recipeModel
    }

}