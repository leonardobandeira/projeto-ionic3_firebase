import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-salvar',
  templateUrl: 'salvar.html',
})
export class SalvarPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public bd: FirebaseServiceProvider) {
  }

  dados = {
    'nome': '',
    'preco': '',
    'descricao': ''
  };

  salvar(dados) {
    this.bd.salvarDados(dados);
  }
}