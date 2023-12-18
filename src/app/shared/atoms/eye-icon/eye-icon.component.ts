import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-eye-icon',
  standalone: true,
  imports: [CommonModule, TuiSvgModule,
  ],
  templateUrl: './eye-icon.component.html',
  styleUrls: ['./eye-icon.component.scss']
})
export class EyeIconComponent {

}
