import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() duration = 5000; // Duration in milliseconds
  isVisible = false;
  timerWidth = 0;

  ngOnInit() {
    this.showAlert();
  }

  showAlert() {
    this.isVisible = true;
    this.timerWidth = 100;
    setTimeout(() => {
      this.timerWidth = 0;
    }, 100);

    setTimeout(() => {
      this.isVisible = false;
    }, this.duration);
  }
}
