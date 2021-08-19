import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldSelect } from '@ngx-formly/bootstrap/lib/types/select';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { Test } from './test';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
