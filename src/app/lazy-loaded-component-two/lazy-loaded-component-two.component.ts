import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-component-two',
  templateUrl: './lazy-loaded-component-two.component.html',
  styleUrls: ['./lazy-loaded-component-two.component.sass']
})
export class LazyLoadedComponentTwo implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
