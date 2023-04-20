import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
      import(
        './home/feature/home.module'
      ).then((m) => m.HomeModule)
  },
  {
    path: 'event-creator',
    loadChildren: () =>
      import(
        './event-creator/features/event-creator-overview/event-creator-overview.module'
      ).then((m) => m.EventCreatorOverviewModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
