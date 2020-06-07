import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    /*this.usuario.email = 'martin.v.ortega@gmail.com';
    this.usuario.nombre = 'Sergio Villagomez';
    this.usuario.password = '123456'*/
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    /*console.log('formulario enviado');
    console.log(this.usuario);
    console.log(form);*/

    this.auth.nuevoUsuario(this.usuario)
      .subscribe( resp =>{
        console.log(resp);
      }, (err) =>{
          console.log(err.error.error.message);
      });

  }

}
