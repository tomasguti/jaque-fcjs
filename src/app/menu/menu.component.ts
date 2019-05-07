import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickSchedule() {
    this.router.navigateByUrl('/schedule');
  }

  clickGuarani() {
    const url = 'https://servicios.unl.edu.ar/fce/';
    this.openExternalLink(url);
  }

  clickEntornoVirtual() {
    const url = 'https://entornovirtual.unl.edu.ar/course/index.php?categoryid=14';
    this.openExternalLink(url);
  }

  clickTwitter() {
    const url = 'https://';
    this.openExternalLink(url);
  }

  clickFacebook() {
    const url = 'https://www.facebook.com/mareaestudiantilfcjs/';
    this.openExternalLink(url);
  }

  clickInstagram() {
    const url = 'https://www.instagram.com/mareaestudiantilfcjs/';
    this.openExternalLink(url);
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }

}
