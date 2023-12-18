import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EyeIconComponent } from '../../../../shared/atoms/eye-icon/eye-icon.component';
import { RightArrowComponent } from '../../../../shared/atoms/right-arrow/right-arrow.component';

@Component({
  selector: 'app-news-updates',
  standalone: true,
  imports: [CommonModule, EyeIconComponent, RightArrowComponent],
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.scss']
})
export class NewsUpdatesComponent {

}
