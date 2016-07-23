import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjetService} from '../services/ProjetService';
import {ProjetInfo} from '../projet-info/projet-info';

@Component({
    templateUrl: 'build/pages/projet-list/projet-list.html',
    providers: [ProjetService]
})

export class ProjetListPage {

	projets: Array<any>;

    constructor(private navController: NavController, private projetservice: ProjetService) {

    }

	ionViewLoaded(){
   this.projetservice.searchProjets("").subscribe(
				data => {
					this.projets = data; 
					console.log('all');
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Projet search complete')
			);
  }

  
	chercherProjet(event, key) {
		if(event.target.value.length >= 1) {
			this.projetservice.searchProjets(event.target.value).subscribe(
				data => {
					this.projets = data; 
					console.log('karm');
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Projet search complete')
			);
		}
	} 
  
	itemTapped(event, projet) {
		console.log(projet);  
		this.navController.push(ProjetInfo, {
			projet: projet
		});
	}
}