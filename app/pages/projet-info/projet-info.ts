import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
	templateUrl: 'build/pages/projet-info/projet-info.html'
})

export class ProjetInfo {
	
	projet: {};	
	constructor(private navController: NavController, private navParams: NavParams) {
		this.projet = navParams.get('projet');
	}	
}