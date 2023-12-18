import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageCardComponent } from '../../../../shared/atoms/image-card/image-card.component';
import { ButtonComponent } from '../../../../shared/atoms/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ImageCardComponent, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  vecorPath = 'assets/vectors/about-vector.png';
  topImage: string = "assets/images/about_section/top_card.png";
  leftImage: string = "assets/images/about_section/left_card.png";
  rightImage: string = "assets/images/about_section/right_card.png";

}
