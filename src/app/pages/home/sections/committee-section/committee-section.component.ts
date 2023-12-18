import { Component } from '@angular/core';
import { CardInterface } from '../../../../shared/interfaces/card-interface';
import { CardsComponent } from '../../../../shared/atoms/cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-committee-section',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './committee-section.component.html',
  styleUrls: ['./committee-section.component.scss'],
})
export class CommitteeSectionComponent {
  cards: CardInterface[] = [
    {
      Title: 'Ibrahim Al Sheddi',
      subTitle: 'Chairman of the academic committee',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Ibrahim.svg',
      imgAlt: 'asdasd',
    },
    {
      Title: 'Asma Al Tuwaijri',
      subTitle: 'Executive director at Saudi E-Sports academy',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Asma.svg',
      imgAlt: 'asdasd',
    },
    {
      Title: 'Faisal Bin Homran',
      subTitle: 'Head of E-Sports at Saudi E-Sports federation',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Faisal.svg',
      imgAlt: 'asdasd',
    },
    {
      Title: 'Dr. Ali Al Shammari',
      subTitle: 'Educational consultant',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Ali.svg',
      imgAlt: 'asdasd',
    },
    {
      Title: 'Enas Al Hassan',
      subTitle: 'Students affairs team lead',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Enas.svg',
      imgAlt: 'asdasd',
    },
   
    
    {
      Title: 'Abdullah Al Nasser',
      subTitle: 'E-Sports professional events manager',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Abdullah.svg',
      imgAlt: 'asdasd',
    },
    {
      Title: 'Nicole Choi',
      subTitle: 'Educational project manager',
      content: 'is simply dummy text of the printing and typesetting industry.',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Nicole.svg',
      imgAlt: 'asdasd',
    },
    {
      Title: 'Ahmad Al Sagga',
      subTitle: 'Head of project management',
      content: 'is simply dummy text of the printing and typesetting industry. ',
      linkedIn: 'la;ksd;asd',
      twitter: 'aksdasd',
      imgSrc: '../../../../../assets/images/Card-Images/Ahmad.svg',
      imgAlt: 'asdasd',
    },
   
  ];
}
