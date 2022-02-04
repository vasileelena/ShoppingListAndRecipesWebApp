import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsedMenu = true;
  @Output() featureSelected = new EventEmitter<string>();

  onNavSelect(selected: string){
    this.featureSelected.emit(selected);
  }
}
