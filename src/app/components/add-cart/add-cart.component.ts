import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/clases/cat';
import { DataCatsService } from 'src/app/services/data-cats.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.less']
})
export class AddCartComponent implements OnInit {

  catForms: FormGroup;

  constructor(private catsService: DataCatsService,
   private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  add(name: string, description: string, like: number, img: string): void {
    this.catsService.addCat({ name, description, like, img } as Cat)
      .subscribe(() => this.catsService.goCard());
  }

  initForm(): void {
    this.catForms = this.fb.group({
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
