export default class Step implements StepModel{

    constructor(recipeId : string,description : string,title : string) {
        this._recipeId = recipeId
        this._description = description
        this._title = title
    }


    private _recipeId : string;
    private _description: string;
    private _title: string;

    get recipeId(): string {
        return this._recipeId;
    }

    set recipeId(value: string) {
        this._recipeId = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

}