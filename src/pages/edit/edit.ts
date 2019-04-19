import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  dados = {
    'nome': '',
    'preco': '',
    'descricao': ''
  };

  key;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bd: FirebaseServiceProvider) {
    this.dados = this.navParams.get('dados');
    this.key = this.navParams.get('key');
  }

  update(course) {
    this.bd.update(this.key, this.dados).then(d => {
      this.navCtrl.setRoot(HomePage);
    });
  }

  remove(course) {
    this.bd.apagar(this.key).then(d => {
      this.navCtrl.setRoot(HomePage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
