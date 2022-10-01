import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  title = 'Recent Photos'
	@Input() filterBy?: string = 'all'
	visibleImages: any[] = [];


  constructor() { }


  ngOnInit(): void {

    




  }


}















