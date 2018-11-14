import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectiveService {

  constructor(private _http: HttpClient) { }

  send(body) {
    return this._http.post('http://localhost:3000/directive/post', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  list() {
    return this._http.get('http://localhost:3000/directive/list')
  }

  getUserDir() {
    return this._http.get('http://localhost:3000/directive/userdir', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')

    })
  }

  dirReviewed(id) {
    console.log("the id is:" + id)
    return this._http.patch('http://localhost:3000/directive/reviewed/' + id, {"reviewed": true})
  }
}
