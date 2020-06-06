import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    console.log('Imprimir Formulario solo si es valido');
    console.log(this.usuario);
    console.log(form);
  }



}
