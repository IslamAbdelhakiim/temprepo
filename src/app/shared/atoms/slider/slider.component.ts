import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// import { CommonModule, NgFor } from '@angular/common';
// import { TuiRootModule } from '@taiga-ui/core';
// import {TuiCarouselModule} from '@taiga-ui/kit';
// import { TuiPaginationModule , TuiIslandModule } from '@taiga-ui/kit';
import { TuiRootModule , TuiSvgModule } from '@taiga-ui/core';
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, TuiRootModule, TuiPaginationModule, TuiCarouselModule, TuiIslandModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SliderComponent {
  index = 2;
  buttonExisted:boolean = false;
  itemsCount:number = 3;
  @Input() items = [
      'John Cleese',
      'Eric Idle',
      'Michael Palin',
      'Graham Chapman',
      'Terry Gilliam',
      'Terry Jones',
  ];
  onIndex(index: number): void {
    this.index = index * this.itemsCount;
}
}
