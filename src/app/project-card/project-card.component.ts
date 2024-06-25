import { Component, Input } from '@angular/core';
import { Projet } from '../modele/Projet';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projet = {} as Projet;
}
