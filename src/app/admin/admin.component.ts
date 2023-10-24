import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesDataService } from '../shared/recipes-data.service';
import { Recipe } from '../recipes/recipe/recipe.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  recipes;
  recipeWasSelected = false;
  selectedRecipe: Recipe;
  showAlert = false;
  timeSet: boolean;
  form: FormGroup;
  
  constructor(private route: Router, private recipesDataService: RecipesDataService) {
    //Getting all the recipes from the service
    this.recipesDataService.recipes.subscribe(
      value => this.recipes = value
    )
  }

  onSelectRecipe(recipe) {
    //Select recipe
    this.recipeWasSelected = true;
    this.selectedRecipe = recipe;

    //Create reactive form
    this.form = new FormGroup({
      'prepTime': new FormControl(null),
      'cookingTime': new FormControl(null)
    })
  }

  onSave() {
    //Show Prep time & Cooking time  + Show alert
    console.log(this.selectedRecipe.title + ' (Prep time: ' + this.form.controls['prepTime'].value + ' hrs, Cooking time: ' + this.form.controls['cookingTime'].value + ' hrs)');
    this.timeSet = this.form.controls['prepTime'].value || this.form.controls['cookingTime'].value == '' ? true : false;
    console.log(this.timeSet)
    this.showAlert = true;
    this.form.reset();
  }
}