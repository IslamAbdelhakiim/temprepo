import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  @Input() cardTitle: TemplateRef<ElementRef> | null = null;
  @Input() content: TemplateRef<ElementRef> | null = null;
  @Input() subtitle: TemplateRef<ElementRef> | null = null;
  @Input() imgSrc: string = "";
  @Input() imgAlt: string = "";
  @Input() twitterLink: string = "";
  @Input() linkedinLink: string = "";
}
