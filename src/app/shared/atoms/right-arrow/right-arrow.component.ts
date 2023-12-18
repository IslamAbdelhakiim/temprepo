import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-right-arrow',
  standalone: true,
  imports: [CommonModule, TuiSvgModule],
  templateUrl: './right-arrow.component.html',
  styleUrls: ['./right-arrow.component.scss']
})
export class RightArrowComponent {

}
