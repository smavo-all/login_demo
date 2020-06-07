import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }
  
  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    /*console.log('Imprimir Formulario solo si es valido');
    console.log(this.usuario);
    console.log(form);*/

    this.auth.login(this.usuario)
      .subscribe( resp =>{
        console.log(resp);
      }, (err) =>{
          console.log(err.error.error.message);
      });
  }



}
