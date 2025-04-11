import { Component } from '@angular/core';
import {TuiEditor} from '@taiga-ui/editor';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {IonicModalComponent} from '../ionic-modal/ionic-modal.component';

@Component({
  selector: 'app-playground',
  imports: [
    TuiEditor,
    ReactiveFormsModule,
    IonicModalComponent
  ],
  template: `

    <section class="playground">
      <h1>I'm playground</h1>

      <div class="example">

        <div id="test-trigger" class="trigger-btn">
          trigger-btn
        </div>

        <tui-editor [formControl]="testControl"> Properly works </tui-editor>

      </div>

    </section>

    <app-ionic-modal trigger="test-trigger"></app-ionic-modal>
  `,
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

  protected readonly testControl = new FormControl('')

}
