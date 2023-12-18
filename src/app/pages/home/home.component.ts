import { Component } from '@angular/core';
import { TuiRootComponent, TuiRootModule } from '@taiga-ui/core';
import { AboutComponent } from './sections/about/about.component';
import { CommitteeSectionComponent } from './sections/committee-section/committee-section.component';
import { CounterComponent } from '../../shared/atoms/counter/counter.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NewsUpdatesComponent } from './sections/news-updates/news-updates.component';
import { PrinceWordComponent } from './sections/prince-word/prince-word.component';
import { VideoStreamComponent } from './sections/video-stream/video-stream.component';
import { WatchnowSectionComponent } from './sections/watchnow-section/watchnow-section.component';
import { SliderComponent } from '../../shared/atoms/slider/slider.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/molecules/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiRootModule, AboutComponent, CommitteeSectionComponent, CounterComponent, FooterComponent, NewsUpdatesComponent, PrinceWordComponent, VideoStreamComponent, WatchnowSectionComponent, SliderComponent, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
