import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Recipe } from 'src/app/recipes/recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {
  selectedRecipe = new Subject<Recipe>();
  selectedRecipeStored;

  public recipes = Observable.create(
    observer => {
      observer.next([
        new Recipe(1, 'Mediterranean Bowl', 
          '../../assets/images/Mediterranean-Bowl.jpg', 
          'This filling rainbow bowl is a mish-mash of quinoa, cucumbers or kale or spinach (fresh or sautéed – we’ve done all combinations and types of greens at our house), feta cheese, kalamata olives, pepperoncini eaten straight out of the jar because they are so salty and delicious I mean say what? 👅 Also red onion, hummus if you like, and basil or any other herbs, really.',
          ['quinoa', 'spinach', 'feta cheese', 'hummus', 'garlic'], null, null),
        new Recipe(2, 'Broccoli Cheese Soup',
          '../../assets/images/Broccoli-Cheese-Soup.jpg',
          'Broccoli cheese soup, in case you needed reminding, is going to bring several good things into your life: a delicate start of butter and garlic and onions, a silky-smooth soup base, little bite-sized bits of just-right broccoli, thinly sliced carrots, and a sharp, creamy finish from that cheddar cheese. It’s flavorful, it’s veg-loaded and fresh, but it’s also extremely comforting, unassuming, and mellow. And I think we could all use a little more mellow right about now, yes?',
          ['butter', 'onion', 'milk', 'broccoli', 'garlic'], null, null),
        new Recipe(3, 'Zucchini Muffins',
          '../../assets/images/Zucchini-Muffins.jpg',
          'These zucchini muffins are both dense and springy in just the right balance – not heavy, not overly sweet, just wholesome and filling.',
          ['zucchini', 'rolled oats', 'milk', 'olive oil', 'eggs'], null, null),
        new Recipe(4, 'Butter Chicken Meatballs',
          '../../assets/images/butter-chicken.jpg',
          'These butter chicken meatballs are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. It is a thing of beauty. I look forward to dinner all day long when I know we are having this. And as I’m sure you imagine, the leftovers are even better, so lunch the next day is something to look forward to, too.',
          ['butter', 'onion', 'turmeric', 'coocke chicken', 'ginger'], null, null)
      ])
    }
  )

  constructor() {
    this.selectedRecipe.subscribe(value => this.selectedRecipeStored = value)
  }
}
