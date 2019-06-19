import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  color: String;

  title: String;

  desc: String;

  errors: String;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    let elem = document.querySelector('#modal2');
    M.Modal.getInstance(elem).close();
  }

}
