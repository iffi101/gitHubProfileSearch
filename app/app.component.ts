import { Component } from '@angular/core';
import {GithubService} from './services/github.service';
import {HttpModule} from '@angular/http';

@Component({
    selector: 'my-app',
    template: '<profile></profile>',
    providers:[GithubService]
})
export class AppComponent { 
    constructor (){

    }
}
