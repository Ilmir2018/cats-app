import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/clases/cat';
import { DataCatsService } from 'src/app/services/data-cats.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.less']
})
export class CatCardComponent implements OnInit {

  cat: Cat;
  disabled = true;
  delete = false;

  constructor(private route: ActivatedRoute, private catService: DataCatsService) { }

  ngOnInit() {
    this.dataCat();
  }

  dataCat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.catService.getCat(id)
      .subscribe(cat => this.cat = cat);
  }

  editing() {
    this.catService.updateCard(this.cat)
    .subscribe(() => this.catService.goCard());
  }

  deleteCat(cat: Cat) {
      this.catService.delete(cat).subscribe(() => this.catService.goCard());
  }

  deleted() {
    this.delete = !this.delete;
  }

}
