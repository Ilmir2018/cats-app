import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { CatsComponent } from './components/cats/cats.component';
import { EditingCardComponent } from './components/editing-card/editing-card.component';

const routes: Routes = [
  { path: 'cats', component: CatsComponent },
  { path: 'add', component: AddCartComponent },
  { path: 'cats/:id', component: CatCardComponent },
  { path: 'editing/:id', component: EditingCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
