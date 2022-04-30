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
    const url = 'https://servicios.unl.edu.ar/fcjs/';
    this.openExternalLink(url);
  }

  clickEntornoVirtual() {
    const url = 'https://evirtual.unl.edu.ar/course/index.php?categoryid=14';
    this.openExternalLink(url);
  }
  
  clickAulaVirtual() {
    const url = 'https://servicios.unl.edu.ar/aulavirtual/fcjs/';
    this.openExternalLink(url);
  }

  clickMasHerramientas() {
    const url = 'https://linktr.ee/corrienteuniversitariafcjs';
    this.openExternalLink(url);
  }

  clickTwitter() {
    const url = 'https://';
    this.openExternalLink(url);
  }

  clickFacebook() {
    const url = 'https://www.facebook.com/groups/212315765470203';
    this.openExternalLink(url);
  }

  clickInstagram() {
    const url = 'https://www.instagram.com/corrienteuniversitariafcjs/';
    this.openExternalLink(url);
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }

}
