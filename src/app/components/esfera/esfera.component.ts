import { Component, OnInit } from '@angular/core';
import * as TagCloud from 'TagCloud';

@Component({
  selector: 'app-esfera',
  templateUrl: './esfera.component.html',
  styleUrls: ['./esfera.component.css']
})
export class EsferaComponent implements OnInit {

  sphereProperty: boolean = true;

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

    this.showSphere();

    TagCloud('.Sphere', this.texts, {

      // Sphere radius in px
      radius: 230,
  
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

  

}
