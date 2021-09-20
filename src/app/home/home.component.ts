import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stepper: any;
  @ViewChild('steppers') steppers: any;
  currentStep: any;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    // this.stepper = new Stepper(this.steppers);
    // this.stepper = new Stepper(document.querySelector('.bs-stepper'));
    const stepperEl = this.elementRef.nativeElement.querySelector('#stepper1');

    stepperEl.addEventListener('show.bs-stepper', (event: { detail: { to: any; }; }) => {
      this.currentStep = event.detail.to;
    });

    this.stepper = new Stepper(stepperEl, {
      linear: false,
      animation: true
    });
  }

  // scrollToElement($element: any): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "start"});
  // }

}
