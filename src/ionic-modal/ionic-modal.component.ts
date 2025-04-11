import {Component, input} from '@angular/core';
import {IonButton, IonButtons, IonHeader, IonModal, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {TuiEditor} from '@taiga-ui/editor';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {fromPromise} from 'rxjs/internal/observable/innerFrom';
import {map} from 'rxjs';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-ionic-modal',
  template: `
    <ion-modal
      [trigger]="trigger()"
      [canDismiss]="true"
      [initialBreakpoint]="1"
      [breakpoints]="[0, 1]"
      [mode]="'ios'"
      #modal
    >
      <ng-template>

<!--        <div>-->
<!--          <h2>First</h2>-->
<!--          <tui-editor [formControl]="testControl"> Static editor </tui-editor>-->
<!--        </div>-->
<!--If this guy mount first, other will properly works...-->


        <ion-header>
          <ion-toolbar>
            <ion-title>Playground</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="modal.dismiss()">Закрыть</ion-button>
            </ion-buttons>
          </ion-toolbar>
<!-- Also if toolbar above muted, then guys below will work properly -->
        </ion-header>

        <div (touchmove)="virtualScrolled($event)" class="modal-content">

          <div>
            <h2>Static</h2>
            <tui-editor [formControl]="testControl"> Static editor </tui-editor>
          </div>

          <div>
            <h2>Lazy</h2>
            <ng-container *polymorpheusOutlet="lazyLoaded$ | async"/>
          </div>

        </div>
      </ng-template>
    </ion-modal>
  `,
  styleUrls: ['./ionic-modal.component.scss'],
  imports: [
    IonButton,
    IonButtons,
    IonHeader,
    IonModal,
    IonTitle,
    IonToolbar,
    TuiEditor,
    ReactiveFormsModule,
    PolymorpheusOutlet,
    AsyncPipe
  ]
})
export class IonicModalComponent  {

  trigger = input('')


  constructor() { }

  protected readonly testControl = new FormControl('')

  virtualScrolled(event: TouchEvent) {
    event.stopPropagation();
  }

  lazyLoaded$ = fromPromise(import('../lazy-wrapper/lazy-wrapper.component').then((c)=> c.LazyWrapperComponent))
    .pipe(map((c)=> new PolymorpheusComponent(c)))

}
