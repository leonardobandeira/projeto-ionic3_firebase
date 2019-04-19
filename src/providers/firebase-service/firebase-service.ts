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
    return this.bancoDeDados.list('dados').snapshotChanges();
  }

  update(key:any, dados:any) {
    return this.bancoDeDados.list('dados').update(key, dados);
  }

  apagar(key:any) {
    return this.bancoDeDados.list('dados').remove(key);
  }
}
