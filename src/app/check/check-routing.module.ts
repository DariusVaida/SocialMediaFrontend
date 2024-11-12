import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckScreenComponent } from "./containers";

const routes: Routes = [
  { path: '',
    component: CheckScreenComponent
  },
  { path: 'shop',
    component: CheckScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CheckRoutingModule { }
