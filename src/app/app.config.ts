import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserStorageService } from "./shared/services/browserStorage.service";
import { BrowserStorageServerService } from "./shared/services/browserStorageServer.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(TuiRootModule),
   { provide: BrowserStorageService,
    useClass: BrowserStorageServerService,},

  ]
};
