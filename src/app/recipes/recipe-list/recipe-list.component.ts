import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('TestRecipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('TestRecipe1', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
