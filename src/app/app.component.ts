import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-list-Recipes-Project';
  selectedFeature : string = 'recipes';

  onNavSelect(selected: string) {
    this.selectedFeature = selected;
  }
}
