import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as TagCloud from 'TagCloud';

@Component({
  selector: 'app-esfera',
  templateUrl: './esfera.component.html',
  styleUrls: ['./esfera.component.css']
})
export class EsferaComponent implements OnInit {

  sphereProperty: boolean = true;
  public getScreenWidth: any = screen.width;
  radio: any = screen.width > 600 ? 230 : 100;
  //public getScreenHeight: any;
  
  


  texts: string[] = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'TYPESCRIPT', '.NET', 'ANGULAR',
    'PYTHON', 'BOOTSTRAP',
    'SPRING', 'BASH', 'DJANGO',
    'LINUX', 'MYSQL', 'JQUERY', 'JAVA',
    'JIRA'
  ];
  

  //colorProperty = '#FF5733 ';

  constructor() {

  }

  ngOnInit(): void {

    
    let radio = this.radio;
    console.log(radio);

   
    this.showSphere();

    TagCloud('.Sphere', this.texts, {

      // Sphere radius in px

      
      radius: radio,
   
  
      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'fast',
  
      // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
      direction: 135,
  
      // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
      keep: true
  
    });

   
  }

  showSphere(): void{

    let duracion: number = 2250;

    setTimeout(()=>{

      this.sphereProperty = false;

    }, duracion);
  }

  /*
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenWidth = event.target.innerWidth;
  }
  */

  

  

}
