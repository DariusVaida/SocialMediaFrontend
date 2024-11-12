import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeScreenComponent } from './containers';
import { HeaderComponent} from "../shared/components/header/header.component";
import { MenuComponent } from "../shared/components/menu/menu.component";
import { FrontPageComponent } from './components/front-page/front-page.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { ProgressBarComponent } from "../shared/components/progress-bar/progress-bar.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    HomeScreenComponent,
    FrontPageComponent,
    CollectionComponent,
    CollectionCardComponent,
  ],
  exports: [
    HomeScreenComponent
  ],
  imports: [
      HomeRoutingModule,
      CommonModule,
      HeaderComponent,
      NgOptimizedImage,
      RouterOutlet,
      HttpClientModule,
      MatIconModule,
      MenuComponent,
      BrowserAnimationsModule,
      ProgressBarComponent
  ]
})
export class HomeModule { }
