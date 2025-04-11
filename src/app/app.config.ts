import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import {ApplicationConfig, Injector, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), NG_EVENT_PLUGINS,
  {
    provide: TUI_EDITOR_EXTENSIONS,
    deps: [Injector],
    useFactory: (injector: Injector) => [
      ...TUI_EDITOR_DEFAULT_EXTENSIONS,
      import('@taiga-ui/editor').then(({setup}) => setup({injector})),
    ],
  }, provideIonicAngular({}),
]
};
