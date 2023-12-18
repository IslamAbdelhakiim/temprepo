import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TuiIconModule } from '@taiga-ui/experimental';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TuiIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    if (this.document) {
      let hamburger = this.document.querySelectorAll('.hamburger')[0];
      const navLinks = this.document.querySelector('.nav-links');
      const links = this.document.querySelectorAll('.nav-links li');
      hamburger.addEventListener('click', () => {
        //Animate Links
        navLinks.classList.toggle('open');
        links.forEach((link) => {
          link.classList.toggle('fade');
        });

        //Hamburger Animation
        hamburger.classList.toggle('toggle');
      });
    }
  }

  toggle(): void {
    const button: any = document.getElementById('menu-toggle');
    const navbarElement: any = document.getElementsByClassName('navbar');
    const menuElement: any = document.getElementById('menu');
    const floatedIcons: any = document.getElementById('floated-icons');
    button.addEventListener('click', function (e: Event) {
      if (button.checked) {
        //handle scrollbar
        document.getElementsByTagName('html')[0].classList.add('noscroll');
        menuElement.style.overflowY = 'scroll';

        //handle floated icons
        floatedIcons.classList.add('hidden');

        navbarElement[0].style.overflowY = 'visible';
        menuElement.classList.remove('hidden');
        menuElement.classList.add('inline-block');
      } else {
        menuElement.classList.remove('inline-block');
        menuElement.classList.add('hidden');

        //handle floated icons
        floatedIcons.classList.remove('hidden');
        // navbarElement[0].classList.remove('pr-[30px]')
        document.getElementsByTagName('html')[0].classList.remove('noscroll');
      }
    });
  }

  changeLang(): void {
    const currentLang = this.translationService.currentLang;
    if (currentLang == 'en') {
      this.translationService.setLang('ar');
    } else {
      this.translationService.setLang('en');
    }
  }
}
