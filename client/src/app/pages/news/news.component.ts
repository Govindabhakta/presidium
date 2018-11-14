import { Component, OnInit } from '@angular/core';
import { PressService } from '../../services/press.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'], 
  providers: [ PressService ]
})
export class NewsComponent implements OnInit {

  constructor(private _press: PressService) {
    this._press.getPress().subscribe((data: Array<Object>) => {this.articles = data.reverse()})
    console.log(this.articles)
   }

  articles = []
  p: Number = 1;

  ngOnInit() {
    
  }

  getFeaturedNews() {
    return this._press.getFeaturedPress();
  }

  isPress(article) {
    return (article.type === "press")
  }

  isStatement(article) {
    return (article.type === "statement")
  }
}
