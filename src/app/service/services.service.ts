import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {
  debounceTime,
  pluck,
  distinctUntilChanged,
  switchMap,
  catchError,
  filter,
  map,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private userData = new Subject;
  public GITHUB_USERS_LIST = "https://api.github.com/search/users";
  public GITHUB_USER = "https://api.github.com/users/";
  userData$ = this.userData.asObservable();
  constructor(private http: HttpClient) { }
  emitdata(userdata){
    this.userData.next(userdata); 
  }

  searchList(input: any) {
    input
    .pipe(
      pluck("target", "value"),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTerm) =>
        ajax.getJSON(`${this.GITHUB_USERS_LIST}?q=${searchTerm}`).pipe(
          map((response) => {
            return { data: response, key: Date.now() };
          }),
          catchError((error, caught) => {
            console.error(`Error:`);
            return '';
          })
        )
      )
    )
    .subscribe((response) => {
      console.log(response);
      this.emitdata(response);
    });
  }


  public searchUser(term): Observable<any> {
    return this.http.get(this.GITHUB_USER + term).pipe(map(res => res));
  }
}
