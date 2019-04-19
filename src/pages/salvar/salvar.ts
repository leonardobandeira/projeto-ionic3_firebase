import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-salvar',
  templateUrl: 'salvar.html',
})
export class SalvarPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public bd: FirebaseServiceProvider,public toastCtrl: ToastController) {
  }

  dados = {
    'nome': '',
    'preco': '',
    'descricao': ''
  };

  salvar(dados) {
    this.bd.salvarDados(dados);
    this.presentToast();
    this.navCtrl.setRoot(HomePage);
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Dados salvos!',
      duration: 3000
    });
    toast.present();
  }
}