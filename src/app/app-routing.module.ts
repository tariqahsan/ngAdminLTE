import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






// imports: [
//     BrowserModule,
//     AppRoutingModule, RouterModule.forRoot(appRoutes)
//   ],
