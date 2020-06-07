import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1'
  private apikey = 'AIzaSyDp3rie0YbxZ4bXAPozJxoasU475J9Lj0A'

  // Sign up with email / password - 06/06/2020
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Sign in with email / password 06/06/2020
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
  }

  logout() {
  }

  login(usuario: UsuarioModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
      authData
    );

  }

  nuevoUsuario(usuario: UsuarioModel) {

    const authData = {
      /*email: usuario.email,
      password: usuario.password,*/
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apikey}`,
      authData
    );

  }

}
