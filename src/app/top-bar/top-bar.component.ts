import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  private DEFAULT_TITLE = 'INFO. BEDELÍA';
  public title = this.DEFAULT_TITLE;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        switch(event.url) {
          case '/schedule':
            this.title = 'Horarios de Cursado';
            break;
          case '/info':
            this.title = 'Acerca de';
            break;
          default:
            this.title = this.DEFAULT_TITLE;
        }
      }

    })
  }

  clickBack() {
    this.router.navigateByUrl('/menu');
  }

  clickInfo() {
    this.router.navigateByUrl("/info");
  }

  showBack() {
    return this.router.url !== '/menu'
  }

  showInfo() {
    return this.router.url === '/menu'
  }
}
