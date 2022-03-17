import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: false}) slForm: NgForm;
  defaultAmount = 1;

  subscription: Subscription;
  editMode = false;
  editingItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editingItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });
  }

  onSubmitIngredient() {
    const newIngredient = new Ingredient(
      this.slForm.value.name,
      this.slForm.value.amount);

    if(this.editMode) {
      this.shoppingService.updateIngredient(this.editingItemIndex, newIngredient)
    }
    else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset({
      name: '',
      amount: this.defaultAmount
    });
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editingItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
