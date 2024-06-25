import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { Projet } from '../modele/Projet';
import { Tag } from '../modele/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  unprojet: Projet = {
    id:0,
    nom:'Plante EEE',
    resume:'BLABLABLA',
    description:'LALALALLA',
    projectLink:'https//xxx',
    photo: [],
    tags: [Tag.ANGULAR, Tag.JAVA, Tag.JavaScript, Tag.SPRING],
  }
  constructor(private titleService: Title) {
    this.titleService.setTitle("Etienne Baillif - PortFolio");

  }
}
