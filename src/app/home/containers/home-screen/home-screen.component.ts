import { Component, OnInit } from '@angular/core';
import { Collections } from "../../../core/constants/collections";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit{
  protected readonly Collections = Collections;
  progressValue = 0;

  ngOnInit() {

  }

  getProgressValue(v: number) {
    this.progressValue = v;
    console.log(this.progressValue);
  }
}
