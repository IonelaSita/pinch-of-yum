export class Recipe {
  constructor(public id: number, 
    public title: string, 
    public imagePath: string, 
    public description: string, 
    public ingredients: string[],
    public prepTime: number,
    public cookingTime: number) {
  }
}
