import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  loading: boolean = true

  constructor() { }

  ngOnInit(): void {

    this.spinnerloading();
    
  }

  spinnerloading(): void{

    
    setTimeout(()=>{
      
      this.loading = false;
    }, 3500);

    
  }

  

}
