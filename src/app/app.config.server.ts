import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { BrowserStorageService } from './shared/services/browserStorage.service';
import { BrowserStorageServerService } from './shared/services/browserStorageServer.service';

const serverConfig: ApplicationConfig = {
  providers: [
    {
      provide: BrowserStorageService,
      useClass: BrowserStorageServerService,
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
