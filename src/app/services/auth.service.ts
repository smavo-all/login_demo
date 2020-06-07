import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UsuarioModel } from '../models/usuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1'
  private apikey = 'AIzaSyDp3rie0YbxZ4bXAPozJxoasU475J9Lj0A'
  userToken: string;

  constructor(private http: HttpClient,
              ) {
                this.leerToken();
  }

  login(usuario: UsuarioModel) {
    // Sign up with email / password - 06/06/2020
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        //console.log('Mapa RXJS');
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }



  logout() {
    localStorage.removeItem('token');
  }



  nuevoUsuario(usuario: UsuarioModel) {
    // Sign in with email / password 06/06/2020
    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    const authData = {
      /*email: usuario.email,
      password: usuario.password,*/
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        //console.log('Mapa RXJS');
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }



  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );
  }



  leerToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;

  }

  estaAutenticado(): boolean {
   
    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }


  }

}
