import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { SalvarPage } from '../salvar/salvar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private dados;

  constructor(public navCtrl: NavController, public db: FirebaseServiceProvider) {
    this.dados = this.db.listarTudo();
    console.log(this.db.listarTudo());
  }

  add() {
    this.navCtrl.setRoot(SalvarPage);
  }

  goToSingle(key) {
    //console.log(key);
  }
}
