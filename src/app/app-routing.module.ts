import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListEditComponent} from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {StartComponent} from "./recipes/start/start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: 'edit', component: ShoppingListEditComponent}
    ]},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: StartComponent, pathMatch: 'full'},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
