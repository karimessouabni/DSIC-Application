import {Component} from '@angular/core';
import {StatsPage} from '../stats/stats';
import {ProjetListPage} from '../projet-list/projet-list';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ProjetListPage;
    this.tab2Root = StatsPage;
    this.tab3Root = StatsPage;
  }
}
