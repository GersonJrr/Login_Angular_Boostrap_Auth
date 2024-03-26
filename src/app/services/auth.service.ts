import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="https://localhost:7080/"

  constructor(private http : HttpClient) { }


  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}registrar`,userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login`,loginObj);
  }
}
