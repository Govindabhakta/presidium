import { Component, OnInit } from '@angular/core';
import { DirectiveService } from '../../services/directive.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']

})
export class DirectivesComponent implements OnInit {

  text: String;
  
  directivetypes = ['Military', 'Diplomatic', 'Economic', 'Other']

  newDirective = {
    title: <String>'',
    id: <String>'',
    content: <String>'',
    dirtype: String,
    author: String
  }

  userDirectives = []
  P: Number = 1;
  allDirectivesLoaded: Boolean = false

  constructor(private _dirService: DirectiveService) {
    this._dirService.getUserDir()
    .subscribe((data: Array<Object>) => {this.userDirectives = data.reverse(); this.allDirectivesLoaded = true }, 
    err => {console.error(err)})
  }

  ngOnInit() {

  }

  submitForm(form: NgForm)  {
    console.log(this.newDirective);
    this._dirService.send(this.newDirective).subscribe(
      data => {console.log(data)},
      error => {console.error(error)}
    );
    form.resetForm();
  }
}


