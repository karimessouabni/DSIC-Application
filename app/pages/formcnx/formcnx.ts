import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {FORM_DIRECTIVES, Control, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {Formvalidator} from '../../providers/formvalidator/formvalidator';
import {ProjetListPage} from '../projet-list/projet-list';
import {HTTP_PROVIDERS, Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {TabsPage} from '../tabs/tabs';

/*
  Generated class for the StatisticsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/formcnx/formcnx.html',
  directives: [FORM_DIRECTIVES]
})

export class Formcnx {


    authForm: ControlGroup;
    email: AbstractControl;
    password: AbstractControl;

    constructor(private navController: NavController, private fb: FormBuilder) {
        
        this.authForm = fb.group({  
            'email': ['', Validators.compose([Validators.required, Validators.minLength(8), Formvalidator.checkEmail])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8), Formvalidator.checkFirstCharacterValidator])]
        });
 
        this.email = this.authForm.controls['email'];     
        this.password = this.authForm.controls['password'];  
    }



    onSubmit(value: string): void { 
        if(this.authForm.valid) {
            //console.log('donnee ', this.todos);
            console.log('Submitted value: ', value);
            this.navController.push(TabsPage);
        }
    } 	

 
}