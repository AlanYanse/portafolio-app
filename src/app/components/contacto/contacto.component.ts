import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;
  url: string = "http://localhost:3000/envio";

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { 

    this.contactForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      email: ["",[Validators.required, Validators.email] ],
      mensaje: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  envioCorreo(): void{

    let cabecera: string = `Hola soy ${this.contactForm.value.nombre} ${this.contactForm.value.email} ...`;

    Notiflix.Loading.standard("Enviando..");

    let params = {
      //nombre: this.contactForm.value.nombre,
      //email: this.contactForm.value.email,
      mensaje: `${cabecera} ${this.contactForm.value.mensaje}`
    }
    //console.log(params);
    
    this.httpClient.post(this.url , params).subscribe(res => {
      //console.log(res);
      Notiflix.Loading.remove();
      Notify.success("Gracias por tu mensaje, pronto obtendrás respuesta");
      this.resetForm();
    });
    

  }

  resetForm(): void{
    this.contactForm.reset();
  }

}
