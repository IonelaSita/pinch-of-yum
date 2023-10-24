import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { RecipesDataService } from '../shared/recipes-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnDestroy {
  recipes;
  selectedRecipe: Recipe;
  didComeFromRecipeCards: boolean;

  constructor(private route: Router, private recipesDataService: RecipesDataService) {
    //Getting all the recipes from the service
    this.recipesDataService.recipes.subscribe(
      value => this.recipes = value    
    )

    //Displaying either the selected recipe (if the user selected a recipe on the home page) or the 1st recipe if the user selected 'Recipes' in the nav
    if (this.recipesDataService.selectedRecipeStored) {
      this.selectedRecipe = this.recipesDataService.selectedRecipeStored;
    } else {
      this.selectedRecipe = this.recipes[0];
    }
    
  }

  //Selecting a recipe from the list on the left
  onSelectRecipe(recipe) {
    this.recipesDataService.selectedRecipeStored = recipe;
    this.selectedRecipe = recipe;
    this.route.navigate(['recipes/' + recipe.id]);
  }

  //Here I get an error if I uncomment the line
  ngOnDestroy(){
    //this.recipesDataService.recipes.unsubscribe();
  }
}
