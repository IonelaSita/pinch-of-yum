import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesDataService } from 'src/app/shared/recipes-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input() recipe: Recipe;

  constructor (private recipeDataService: RecipesDataService) {
    //Display the selected recipe
    this.recipe = this.recipeDataService.selectedRecipeStored;
  }
}
