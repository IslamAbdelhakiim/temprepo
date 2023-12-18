import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  
  @Input() src: string = "";
  @Input() isWide: boolean = false;

  

}
