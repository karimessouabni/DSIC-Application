import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class ProjetService {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
		
	}
 
    searchProjets(projetName) {
        // var url = 'http://api.theprojetdb.org/3/search/projet?query=&query=' + encodeURI(projetName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var url = 'http://localhost/Projet_DSIC/PHP/mobileData?search='+ encodeURI(projetName) +'';
        // return this.http.get("http://localhost/ionicAllp");
        var response = this.http.get(url).map(res => res.json());
		return response;
    }
}