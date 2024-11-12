import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileScreenComponent } from "./containers";


const routes: Routes = [
  { path: '',
    component: ProfileScreenComponent
  },
  { path: 'profile',
    component: ProfileScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
