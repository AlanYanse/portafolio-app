import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  nombre: string = "Alan.Yanse();"; 
  tagLine: string = "";
  
  constructor() { }

  ngOnInit(): void {

    this.showTagLine();
    
  }

  showTagLine(): void{

    let duracion: number = 2500;

    setTimeout(()=>{

      this.tagLine = "web full-stack";

    }, duracion);
  }

 

}
