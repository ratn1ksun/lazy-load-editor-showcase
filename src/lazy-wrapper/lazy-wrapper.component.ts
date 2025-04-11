import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiEditor} from '@taiga-ui/editor';

@Component({
  selector: 'app-lazy-wrapper',
  template: `
    <tui-editor [formControl]="testControl"> Lazy loaded </tui-editor>
  `,
  styleUrls: ['./lazy-wrapper.component.scss'],
  imports: [
    TuiEditor,
    ReactiveFormsModule
  ]
})
export class LazyWrapperComponent  {

  protected readonly testControl = new FormControl('')


}
