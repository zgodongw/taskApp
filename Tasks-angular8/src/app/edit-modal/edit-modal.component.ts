import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  color: String;

  title: String;

  desc: String;

  errors: String;

  constructor() { }

  ngOnInit() {
  }

  cancel() {

  }

  submit() {

    let elem = document.querySelector('#modal1');
    M.Modal.getInstance(elem).close();
    
  }

}
