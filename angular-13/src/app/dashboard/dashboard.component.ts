import { Component,  OnInit } from '@angular/core';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  subtitle: string = '';
  
  constructor(
    ) {

  }


  ngOnInit(): void {
    this.subtitle = 'This is some text within a card block.';
      
  }
}
