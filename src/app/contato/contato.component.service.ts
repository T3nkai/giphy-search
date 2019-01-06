import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const host = 'https://beta.mrest.io';

@Injectable()
export class ContatoComponentService {

  constructor(private http: HttpClient) {
  }

  enviarContato(contatoForm: any): Observable<any> {


    return this.http.post(host, (email: contatoForm.nomeCompleto, from: contatoForm.contato.email, mensagem: contatoForm.contato.mensagem));
  }

}

