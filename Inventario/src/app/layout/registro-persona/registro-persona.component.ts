import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service'
import {Persona} from '../../model/personaModel'

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  Personas:Persona[];
  emailExpresion: any = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  cedulaExpresion: any = /^([0-9])*$/;
  telefonoExpresion: any = /^([0-9])*$/;
  registro: FormGroup;
  url:string= 'http://localhost:8000/server/personas';
  urlget:string = 'http://localhost:3001/server/select?tabla=personas';
  
  nombre1:string;

  constructor(private service:ServiceService) {
    this.registro = this.createFormGroup();
  }

  ngOnInit() {
    this.obtenerPersonas();

  }
  clearForm() {
    this.registro.reset();
  }
  validar() {
    if (this.registro.valid) {
      console.log('Funciona ', this.registro.value)
    }
    else {
      console.log('invalido')
    }
  }
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailExpresion)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(10), Validators.pattern(this.telefonoExpresion)]),
      cedula: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern(this.cedulaExpresion)]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)])
    });
  }
  get nombre() {
    return this.registro.get('nombre');
  }
  get apellido() {
    return this.registro.get('apellido');
  }
  get email() {
    return this.registro.get('email');
  }
  get mensaje() {
    return this.registro.get('mensaje');
  }
  get cedula() {
    return this.registro.get('cedula');
  }
  get telefono() {
    return this.registro.get('cedula');
  }

  obtenerPersonas(){
    this.service.getTodo(this.urlget).subscribe(resp=>{
      console.log(resp['datos']);
      this.Personas = resp['datos'];
       resp['datos'].forEach(element => {
 
 this.nombre1 = element.nombre;
         
       });
       
     
     })
    }

  eliminarPersona(identificador){
    this.service.eliminarPersona(this.url,identificador).subscribe(
      resultado =>{
        this.obtenerPersonas();
    },

    error =>{
      console.log(JSON.stringify(error));
    },)
  }
  actualizarPersona(){
    this.service.actualizarPersona(this.url,this.Personas).subscribe(
      resultado=>{
        this.obtenerPersonas();
        alert("actualizado");
      },
      error=>{
        console.log(error);
      }
    )
    }

  agregarPersona(){
    this.service.agregarPersona(this.url,this.Personas).subscribe(
      resultado =>{
      this.obtenerPersonas();
      },
      error =>{
      console.log(error);
      }
    )
  }

}
