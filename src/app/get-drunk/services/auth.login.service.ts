import { Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/loginRequest.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';
//import * as fs from 'file-system';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0,email:''});

  constructor(private http: HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>('././assets/data.json').pipe(
      tap((userData: User) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true); //user logged
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('An error occured ' + error.error );
    }else{
      console.log('Backend returned state code ', error.status, error.error);
    }
    return throwError(() => new Error('Something went wronge. Please try again'));
  }

  get userData(): Observable<User>{
    return this.currentUserData.asObservable();
  }
  get userLoginOn(): Observable<Boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  saveUserData(newUserData:any){
    /*
    const fs = require('fs');
    const jsonFile = fs.readFileSync('././assets/data.json','utf-8');

    const obj = JSON.parse(jsonFile);
    obj.newObject = {id:'3',name:newUserData.name,lastName:newUserData.lastName,email:newUserData.email};

    const newContJson = JSON.stringify(obj,null,2);

    fs.writeFileSync('././assets/data.json', newContJson);

    console.log('succesfull');
*/
  }
}
