import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { SalvarPage } from '../salvar/salvar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private busca;
  private dados = [];
  private d;
  private k;

  constructor(public navCtrl: NavController, public db: FirebaseServiceProvider) {
    this.busca = this.db.listarTudo();
    this.busca.subscribe(chave => {
      chave.forEach(element => {
        this.d = element.payload.val();
        this.k = {'key': element.key, 'nome': this.d.nome, 'descricao': this.d.descricao, 'preco': this.d.preco};
        this.dados.push(this.k);
      });
    });
  }

  add() {
    this.navCtrl.setRoot(SalvarPage);
  }

  goToSingle(key) {
    console.log(key);
  }
}
