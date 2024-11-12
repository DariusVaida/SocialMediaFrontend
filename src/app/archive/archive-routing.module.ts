import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveScreenComponent } from "./containers";

const routes: Routes = [
  { path: '',
    component: ArchiveScreenComponent
  },
  { path: 'archive',
    component: ArchiveScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
