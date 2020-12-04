import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsComponent } from './components/cats/cats.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { EditingCardComponent } from './components/editing-card/editing-card.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatCardComponent,
    EditingCardComponent,
    AddCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
