import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service'

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  emailExpresion: any = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  registro: FormGroup;
  urlget:string = 'http://localhost:3001/server/select?tabla=personas';

  constructor(private service:ServiceService) {
    this.registro = this.createFormGroup();
  }

  ngOnInit() {

    this.service.get(this.urlget).subscribe(resp=>{
      console.log(resp);
    })


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

}
