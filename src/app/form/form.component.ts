import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private testService: TestServiceService) {}

  form = new FormGroup({});

  model = {};

  fields: FormlyFieldConfig[] = [];

  values1 = of([{ name: 'test1' }, { name: 'test2' }]);
  values2 = of([{ name: 'test3' }, { name: 'test4' }]);

  //This one works fine
  test = this.values1.subscribe(val => {
    this.values2.subscribe(val2 => {
      for (let item of val) {
        let thing: FormlyFieldConfig = {
          key: item.name,
          type: 'input',
          templateOptions: {
            label: item.name,
            required: true
          }
        };
        this.fields.push(thing);
      }
    });
  });

  //Once it's with an api, it doesn't work.
  test2 = this.testService.getValues().subscribe(val => {
    this.values2.subscribe(val2 => {
      for (let item of val2) {
        let thing: FormlyFieldConfig = {
          key: item.name,
          type: 'input',
          templateOptions: {
            label: item.name,
            required: true
          }
        };
        this.fields.push(thing);
      }
    });
  });

  submit(model: any): void {}

  ngOnInit() {}
}
