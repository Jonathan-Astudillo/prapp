import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate : [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'ventanas',
    loadChildren: () => import('./pages/ventanas/ventanas.module').then( m => m.VentanasPageModule)
  },
  {
    path: 'puertas',
    loadChildren: () => import('./pages/puertas/puertas.module').then( m => m.PuertasPageModule)
  },
  {
    path: 'mesas',
    loadChildren: () => import('./pages/mesas/mesas.module').then( m => m.MesasPageModule)
  },
  {
    path: 'sillas',
    loadChildren: () => import('./pages/sillas/sillas.module').then( m => m.SillasPageModule)
  },
  {
    path: 'mesa',
    loadChildren: () => import('./pages/mesa/mesa.module').then( m => m.MesaPageModule)
  },
  {
    path: 'espejos',
    loadChildren: () => import('./pages/espejos/espejos.module').then( m => m.EspejosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'nuevoproducto',
    loadChildren: () => import('./pages/nuevoproducto/nuevoproducto.module').then( m => m.NuevoproductoPageModule)
  },
  {
    path: 'ingresopuertas',
    loadChildren: () => import('./pages/ingresopuertas/ingresopuertas.module').then( m => m.IngresopuertasPageModule)
  },
  {
    path: 'ingresomesas',
    loadChildren: () => import('./pages/ingresomesas/ingresomesas.module').then( m => m.IngresomesasPageModule)
  },
  {
    path: 'ingresosillas',
    loadChildren: () => import('./pages/ingresosillas/ingresosillas.module').then( m => m.IngresosillasPageModule)
  },
  {
    path: 'ingresoespejos',
    loadChildren: () => import('./pages/ingresoespejos/ingresoespejos.module').then( m => m.IngresoespejosPageModule)
  },
  {
    path: 'ingresomesascentro',
    loadChildren: () => import('./pages/ingresomesascentro/ingresomesascentro.module').then( m => m.IngresomesascentroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
