import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/clases/cat';
import { DataCatsService } from 'src/app/services/data-cats.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.less']
})
export class CatsComponent implements OnInit {


  cat: Cat;
  cats: Cat[];
  myLikes = new Map;

  constructor(private catsService: DataCatsService) { }

  ngOnInit() {
    this.getCatList();
  }

  select(cat: Cat): void {
    this.cat = cat;
  }

  getCatList(): void {
    this.catsService.getCats()
      .subscribe(cats => this.cats = cats);
  }

  toggleLike(toggle, cat) {
    let like = toggle > 0 ? 1 : -1;
    let myLike = this.myLikes.get(cat.id) || 0;
    if ( Math.abs(myLike + like)  < 2) {
       cat.like += like;
       this.myLikes.set(cat.id, myLike + like)
    } else {
       return;
    } 
    this.catsService.updateCard(cat)
      .subscribe();
  }



}
