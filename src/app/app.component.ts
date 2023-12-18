import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslationService } from './shared/services/translation.service';
import { BrowserStorageService } from "./shared/services/browserStorage.service";
import { NavbarComponent } from "./shared/molecules/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule, NavbarComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: BrowserStorageService}
  ],
})
export class AppComponent {
  title = 'SEF-Academy-Website-FEND';
  platformId: Object = {};
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private translationService: TranslationService
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    let currentLang = this.translationService.getCurrentLang();
    this.translationService.setLang(currentLang);

    if (typeof IntersectionObserver !== 'undefined') {
      // Your code using IntersectionObserver
      // For example, you can define your IntersectionObserverDirective here
    } else {
      console.warn('IntersectionObserver is not available in this environment.');
      console.warn(
        'IntersectionObserver is not available in this environment.'
      );
    }
    if (isPlatformBrowser(this.platformId)) {
      console.log(this.platformId);
    } else {
      console.log('false');
    }
  }
}
