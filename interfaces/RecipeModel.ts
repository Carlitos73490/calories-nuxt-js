interface RecipeModel{
    id: string;
    title: string;
    author: string;
    publication_date: number;
    ingredients: Array<string>;
    steps: Array<string>;
}