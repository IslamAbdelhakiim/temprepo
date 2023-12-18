import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit , OnDestroy {
@Input() usersCount:number = 0;
@Input() title:string = "asdsa";
@Input() plusFlag:boolean = false;
kFlag:boolean = false;
viewCount : number = 0;
animationFrameId: number | null = null;
ngOnInit(): void {
this.startCounterAnimation();
}

startCounterAnimation(): void {
  if(this.usersCount >1000 ) {
    this.usersCount = this.usersCount / 1000;
    this.kFlag = true;
  }
  let incDividedValue =  (this.usersCount * 100000) / 750; 
  const incrementValue = this.usersCount / incDividedValue;
  this.viewCount += Math.ceil(incrementValue);
  const targetCount = this.usersCount;
  if (this.viewCount < this.usersCount) {
    this.animationFrameId = requestAnimationFrame(() => {
      this.startCounterAnimation()
    });
  } else {
    this.viewCount = this.usersCount;
  }
}

ngOnDestroy(): void {
  if (this.animationFrameId) {
    cancelAnimationFrame(this.animationFrameId);
  }
}
}
