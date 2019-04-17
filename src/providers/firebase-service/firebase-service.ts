import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public bancoDeDados: AngularFireDatabase) { }

  salvarDados(dados: any) {
    this.bancoDeDados.list('dados')
      .push(dados)
      .then(r => console.log(r));
  }

  listarTudo() {
    return this.bancoDeDados.list('dados').valueChanges();
  }
}
