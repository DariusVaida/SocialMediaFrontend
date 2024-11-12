import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { ArchiveScreenComponent } from './containers';
import { ButtonComponent } from "../shared/components/button/button.component";
import { ArchiveService } from "./services";
import { ArchiveRepository } from "./repositories";
import { MenuComponent } from "../shared/components/menu/menu.component";
import { AllImagesComponent } from './components';
import { LikedPostsComponent } from './components';

@NgModule({
  declarations: [
    ArchiveScreenComponent,
    AllImagesComponent,
    LikedPostsComponent
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    NgOptimizedImage,
    MenuComponent,
    MatIconModule
  ],
  providers: [ArchiveService, ArchiveRepository]
})
export class ArchiveModule {}
