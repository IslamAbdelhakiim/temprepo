import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BrowserStorageService } from './browserStorage.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public currentLang: 'en' | 'ar';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private browserStorageService: BrowserStorageService
  ) {}

  getCurrentLang(): 'en' | 'ar' {
    return this.browserStorageService.get('lang') as 'en' | 'ar';
  }

  setLang(lang: 'en' | 'ar'): void {
    if (!lang) {
      let currentLang = this.getCurrentLang() || 'en';
      this.browserStorageService.set('lang', currentLang);
      this.currentLang = currentLang;
      this.loadBootstrapFile();
    } else {
      this.browserStorageService.set('lang', lang);
      this.currentLang = lang;
      this.loadBootstrapFile();
    }
  }

  loadBootstrapFile() {
    const head = this.document.getElementsByTagName('head')[0];
    const body = this.document.getElementsByTagName('body')[0];
    const lang = this.currentLang;
    const styleTagArr = this.document.querySelectorAll('head link');
    let themeLink = this.document.getElementById(
      'lang-layout'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${lang}-layout.css`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'lang-layout';
      style.rel = 'stylesheet';
      style.href = `${lang}-layout.css`;
      head.insertBefore(style, styleTagArr[styleTagArr.length - 1]);
    }

    body.setAttribute('dir', lang == 'ar' ? 'rtl' : 'ltr');
  }
}
