import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SalvarPage } from '../salvar/salvar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SalvarPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
