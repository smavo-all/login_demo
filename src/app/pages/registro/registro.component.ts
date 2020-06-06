import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    this.usuario.email = 'martin.v.ortega@gmail.com';
    /*this.usuario.nombre = 'Sergio Villagomez';
    this.usuario.password = '123456'*/
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    console.log('formulario enviado');
    console.log(this.usuario);
    console.log(form);
  }

}
