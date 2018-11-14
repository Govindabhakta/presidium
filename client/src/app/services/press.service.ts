import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PressService {

  // articles = [
  //   {
  //     title: "Nada Nadhira",
  //     desc: "Drinks Jazz and Listens to Tea",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     imgName: "CouncilsBackground",
  //     type: "press"
  //   }, {
  //     author: "Aishya Rannan",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ", 
  //     type: "statement"
  //   }, {
  //     title: "Titania Celestine", 
  //     desc: "Posts Her Cigars on Instagram",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  //     imgName: "FAQBack1", 
  //     type:"press"
  //   }, {
  //     author: "Pseudo Jesus", 
  //     content: "The guy who made this website is pretty awesome. Props to the dude yo",
  //     type: "statement"
  //   }, 
  //   {
  //     title: "Titania Celestine", 
  //     desc: "Posts Her Cigars on Instagram",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  //     type:"press",
  //     imgName: "FAQBack1"
  //   },
  //   {
  //     title: "Titania Celestine", 
  //     desc: "Posts Her Cigars on Instagram",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  //     type:"press",
  //     imgName: "FAQBack1"
  //   },
  //   {
  //     author: "Pseudo Jesus", 
  //     content: "The guy who made this website is pretty awesome. Props to the dude yo",
  //     type: "statement"
  //   }, 
  //   {
  //     author: "Pseudo Jesus", 
  //     content: "The guy who made this website is pretty awesome. Props to the dude yo",
  //     type: "statement"
  //   }, 
  //   {
  //     author: "Pseudo Jesus", 
  //     content: "The guy who made this website is pretty awesome. Props to the dude yo",
  //     type: "statement"
  //   }, 
  // ]

  articles = [];

  constructor(private _http: HttpClient) { 
    this._http.get('http://localhost:3000/press/getPress').subscribe((data:Array<Object>) => {
      this.articles = data;
      console.log(this.articles)
    })
  }

  getPress() {
    return  this._http.get('http://localhost:3000/press/getPress')
  }

  getFeaturedPress() {
    let imgArticles:Array<Object> = this.articles.filter(data => data.imgName);
    let featured:Array<Object> = imgArticles.reverse().splice(0,3);
    return featured
  }

  submitArticle(body) {
    return this._http.post('http://localhost:3000/press/submitPress', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

}
