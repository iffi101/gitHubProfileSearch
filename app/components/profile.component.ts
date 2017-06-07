import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent { 
     user:any=[];

     private username:string;
    constructor (private _githubService: GithubService){
      //this is dependeny injection 
    }

    searchUser (){
      console.log(this.username);  
      this._githubService.serachuser(this.username);
        this._githubService.getUsers().subscribe(user =>{
           console.log(user);
            this.user=user;               
        });
    }
    
}
