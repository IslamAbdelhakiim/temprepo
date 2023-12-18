import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from '../../../../shared/atoms/counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  standalone: true,
  imports: [CommonModule, CounterParentComponent, CounterComponent],
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.scss']
})
export class CounterParentComponent {

}
