import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'; //observales

@Injectable ()
export class GithubService {
    private username :string;
    private usertoSerach:string;
    private client_id  ='Iv1.5a5e8f6f785f5632';
    private client_secret  ='eb7a02d26dc3b5525b8c14a13018238a8fb6883f';

    constructor (private _http :Http){ //injecting http to use later
        console.log("Github Service Ready");
        this.username='iffi101';
    }
     getUsers(){
        // return this._http.get('https://api.github.com/users/'+this.username+'&client_id='+this.client_id+'&client_secret='+this
        // .client_secret).map (res =>res.json);
            return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
             .map(res => res.json());
    
    }

    serachuser(usertoSerach)
    {
        this.username=usertoSerach;
    }
}
