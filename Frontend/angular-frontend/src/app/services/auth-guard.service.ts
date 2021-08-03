import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private _router: Router) { }

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            if(this.isLoggedIn()){
                return true;
            }else{
                this._router.navigate(['/login'])
            }


    }

    isLoggedIn(): boolean {
        let status = false;
        if(localStorage.getItem('authToken')){
            status = true;
        }else{
            status = false;
        }
        return status;
    }

}

