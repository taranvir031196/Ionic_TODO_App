import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{path: "", redirectTo: "notes", pathMatch: "full" },
{path: "notes" , loadChildren: () => import('src/app/home/home.module').then(m => m.HomePageModule)},   
{path: "notes/:id", loadChildren: () => import ('src/app/detail/detail.module').then(m => m.DetailPageModule)},  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
