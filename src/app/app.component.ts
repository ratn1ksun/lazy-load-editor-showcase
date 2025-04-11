import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [ TuiRoot, IonApp, IonRouterOutlet],
  template: `

    <ion-app>
      <tui-root>

        <ion-router-outlet id="mainRouter"/>


        <ng-container ngProjectAs="tuiOverContent">
          <!-- Content over app content -->
        </ng-container>
        <ng-container ngProjectAs="tuiOverDialogs">
          <!-- Content over dialogs -->
        </ng-container>
        <ng-container ngProjectAs="tuiOverAlerts">
          <!-- Content over alerts -->
        </ng-container>
        <ng-container ngProjectAs="tuiOverPortals">
          <!-- Content over dropdowns -->
        </ng-container>
        <ng-container ngProjectAs="tuiOverHints">
          <!-- Content over hints -->
        </ng-container>
      </tui-root>
    </ion-app>

  `,
  styles: [``]
})
export class AppComponent {
  title = 'lazy-load-editor-showcase';
}
