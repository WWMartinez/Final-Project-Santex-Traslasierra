import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private myAppUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint; // = http://localhost:3308
        // TODO: PORQUE AGREGAMOS USER A LA URL?? URL FINAL: http://localhost:3308/user/login'
    }
    // CREAR USUARIO
    signUp(user: User): Observable<any> {
        return this.http.post(`${this.myAppUrl}/signup`, user);
    }
    // LOGIN USUARIO
    login(user: User): Observable<string> {
        // TODO: PORQUE AGREGAMOS USER A LA URL?? URL FINAL: http://localhost:3308/login'
        return this.http.post<string>(`${this.myAppUrl}/login`, user);
    }
    // NOSE USUARIO
    getUser(): Observable<string> {
        return this.http.get<string>(`${this.myAppUrl}/dashboard`);
    }

}
