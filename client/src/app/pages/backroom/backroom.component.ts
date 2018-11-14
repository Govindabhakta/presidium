import { Component, OnInit } from '@angular/core';
import { DirectiveService } from '../../services/directive.service';
import { PressService } from '../../services/press.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-backroom',
  templateUrl: './backroom.component.html',
  styleUrls: ['./backroom.component.css']
})
export class BackroomComponent implements OnInit {

  constructor(private _dir: DirectiveService, private _press: PressService) {
   }
  
  directives = []
  directive = {
    author : '-',
    content : '',
    id : '-',
    type : '-',
    title : '-',
    reviewed : false,
    _id : {}
  }
  

  newPress = {
    title: <String>'',
    author: <String>'',
    type: <String>'',
    desc: <String>'',
    imgName: <String>'',
    content: <String>''
  }

  ngOnInit() {
    this._dir.list().subscribe( (data: Array<Object>) => {
      this.directives = data.reverse();
      console.log(data)
    })
  }

  selectDir(dir) {
    this.directive.author = dir.author;
    this.directive.content = dir.content;
    this.directive.id = dir.id;
    this.directive.type = dir.dirtype;
    this.directive.title = dir.title;
    this.directive.reviewed = dir.reviewed;
    this.directive._id = dir._id
    console.log(this.directive._id)
    if (this.directive.type === '') {
      this.directive.type = '-'
    }
  }  

  submitForm(press: NgForm) {
    this._press.submitArticle(this.newPress).subscribe(data => {
      console.log(data)
    })
  }

  markReviewed(body) {
    this.directive.reviewed = true
    this._dir.dirReviewed(body._id).subscribe(data => {console.log(data)})
  }

}
