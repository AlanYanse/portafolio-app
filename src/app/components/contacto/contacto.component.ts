import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.contactForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      email: ["",[Validators.required, Validators.email] ],
      mensaje: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
