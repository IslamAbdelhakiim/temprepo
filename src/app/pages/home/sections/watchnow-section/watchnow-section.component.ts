import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoStreamComponent } from '../video-stream/video-stream.component';
import { CounterComponent } from '../../../../shared/atoms/counter/counter.component';
import { CounterParentComponent } from '../counter-parent/counter-parent.component';

@Component({
  selector: 'app-watchnow-section',
  standalone: true,
  imports: [CommonModule, VideoStreamComponent, CounterParentComponent ],
  templateUrl: './watchnow-section.component.html',
  styleUrls: ['./watchnow-section.component.scss']
})
export class WatchnowSectionComponent {

}
