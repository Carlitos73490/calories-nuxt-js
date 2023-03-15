interface RecipeModel{
    id: string;
    title: string;
    author: string;
    publication_date: number;
    ingredients: Array<any>;
    steps: Array<string>;
}