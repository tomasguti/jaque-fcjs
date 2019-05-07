import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {
  @Input() title: string = '';
  @Input() iconSrc: string = '';

  constructor() { }

  ngOnInit() {
  }

}
