import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesDataService } from '../shared/recipes-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  section: string;
  recipes;
  
  constructor(private route: Router, private recipesDataService: RecipesDataService) {
    //To get all the recipes from the service
    this.recipesDataService.recipes.subscribe(
      value => this.recipes = value
    )
  }

  //Select a recipe, send it to the Subject in the service and navigate away
  onSelect(recipe) {
    this.recipesDataService.selectedRecipe.next(recipe);
    this.route.navigate(['recipes/' + recipe.id]);
  }

  ngOnDestroy() {
    //this.recipesDataService.recipes.unsubscribe();
  }
}
