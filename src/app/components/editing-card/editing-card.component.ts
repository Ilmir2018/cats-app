import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/clases/cat';
import { DataCatsService } from 'src/app/services/data-cats.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editing-card',
  templateUrl: './editing-card.component.html',
  styleUrls: ['./editing-card.component.less']
})
export class EditingCardComponent implements OnInit {


  catEdit: FormGroup;
  cat: Cat;

  constructor(private route: ActivatedRoute,
     private catService: DataCatsService,
     private fb: FormBuilder) { }

  ngOnInit() {
    this.dataCat();
    this.initForm();
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

  initForm(): void {
    this.catEdit = this.fb.group({
      description: ['',
        [
          Validators.required
        ]
      ],
      name: ['',
        [
          Validators.required,
        ]
      ],
      likes: ['',
        [
          Validators.required,
          Validators.pattern(/[0-9]/)
        ]],
      image: ['',
        [
          Validators.required,
        ]]
    });
  }

}
