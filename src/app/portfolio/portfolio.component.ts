import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projet } from '../modele/Projet';
import { Tag } from '../modele/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  lesProjets = {} as Projet[];

  isCollapsed: boolean = true;
  filtering: boolean = false;

  //language
  java: boolean = false;
  springBoot: boolean = false;
  Csharp: boolean = false;
  react: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Etienne Baillif - PortFolio');
  }
  ngOnInit(): void {
    this.lesProjets = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.springBoot) {
      filterTags.push(Tag.SPRING);
    }
    if (this.Csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }

    //etat du filtre
    if (filterTags.length > 0) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.lesProjets = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilter() {
    this.java = false;
    this.springBoot = false;
    this.Csharp = false;
    this.react = false;
    this.filtering = false;
    this.lesProjets = this.projectService.GetProjects();
  }
}
