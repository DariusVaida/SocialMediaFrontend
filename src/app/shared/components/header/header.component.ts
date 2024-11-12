import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { ButtonComponent } from "../button/button.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    ButtonComponent,
    MatMenuModule,
    MenuComponent,
    NgIf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected showMenu = false;

  openMenu(): void{
    this.showMenu = !this.showMenu;
  }
}
