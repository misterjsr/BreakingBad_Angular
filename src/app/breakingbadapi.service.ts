import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BBService {

    url = 'https://www.breakingbadapi.com/api/characters/';
    
    constructor(private http: HttpClient){}

    getActores(): Observable<any> {
        return this.http.get(this.url);
    }
}