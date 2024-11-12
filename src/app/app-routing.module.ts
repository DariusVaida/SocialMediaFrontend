import { NgModule } from '@angular/core';
import { mapToCanActivate, RouterModule, Routes } from '@angular/router';
import { CheckScreenComponent } from "./check/containers";
import { ProfileScreenComponent } from "./profile/containers";
import { ArchiveScreenComponent } from "./archive/containers";
import { HomeScreenComponent } from "./home/containers";
import { SignUpComponent } from "./sign-up/containers";
import { LoginComponent } from "./login/containers";
import { LoginGuard } from "./login/login.guard";
import { SignUpGuard } from "./sign-up/sign-up.guard";
import { ProfileGuard } from "./profile/profile.guard";

const routes: Routes = [
  { path: '',
    component: HomeScreenComponent
  },
  { path: 'home',
    component: HomeScreenComponent
  },
  { path: 'check',
    component: CheckScreenComponent
  },
  { path: 'profile',
    component: ProfileScreenComponent,
    canActivate: mapToCanActivate([ProfileGuard])
  },
  { path: 'archive',
    component: ArchiveScreenComponent
  },
  { path: 'sign-up',
    component: SignUpComponent,
    canActivate: mapToCanActivate([SignUpGuard])
  },
  { path: 'login',
    component: LoginComponent,
    canActivate: mapToCanActivate([LoginGuard])
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
