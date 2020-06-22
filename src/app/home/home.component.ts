import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() characters: any;
  constructor() { 

  }
  
  ngOnInit(): void {
    
  }

}
