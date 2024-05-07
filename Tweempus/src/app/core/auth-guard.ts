import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

export const AuthGuard: CanActivateFn = () => {
    //for dependencies injector because it's not a class (doesn't have constructor)
    const router = inject(Router);

    const isSessionStorageAvailable = typeof sessionStorage !== 'undefined';

    const authService = inject(AuthenticationService)

    //if user has token
    if(isSessionStorageAvailable){
        if(sessionStorage.length !== 0){
            return true;
        }
    }
    return router.navigate(['/login']);

}