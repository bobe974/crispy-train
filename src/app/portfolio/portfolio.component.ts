import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { Projet } from '../modele/Projet';
import { Tag } from '../modele/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  lesProjets = {} as Projet[];

  constructor(private titleService: Title, private projectService : ProjectsService) {
    this.titleService.setTitle("Etienne Baillif - PortFolio");
  }
  ngOnInit(): void {
    this.lesProjets = this.projectService.GetProjects();
  }
}
