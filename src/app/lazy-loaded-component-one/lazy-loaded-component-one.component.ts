import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-component-one',
  templateUrl: './lazy-loaded-component-one.component.html',
  styleUrls: ['./lazy-loaded-component-one.component.sass']
})
export class ComponentOne implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
