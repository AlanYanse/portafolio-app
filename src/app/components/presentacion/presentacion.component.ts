import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  nombre: string = "Alan.Yanse();"; 
  tagLineProperty: boolean = true;
  
  constructor() { }

  ngOnInit(): void {

    this.showTagLine();
    
  }

  showTagLine(): void{

    let duracion: number = 2500;

    setTimeout(()=>{

      this.tagLineProperty = false;

    }, duracion);
  }

 

}
