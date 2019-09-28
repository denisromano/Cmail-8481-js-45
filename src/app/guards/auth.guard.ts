import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private roteador: Router){}

    canActivate(){
        console.log('passou no guard!!!');
        
        if (localStorage.getItem('cmail-token')) {
            console.log('tem token');
            
        } else {
            console.log('sem token');
            this.roteador.navigate(['login'])
        }

        return true
    }
}