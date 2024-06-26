import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Projet } from '../modele/Projet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projetActuel = {} as Projet;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Etienne Baillif - Accueil");
  }
  ngOnInit(): void {
   this.projetActuel = this.projectService.GetProjectById(1);
  }
}
