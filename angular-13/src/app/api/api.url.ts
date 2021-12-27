import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Api {
    constructor() { }
    public static url = 'https://localhost:44355/api/';
    //public static url = 'https://api.edihome.com.br/api/';
}
