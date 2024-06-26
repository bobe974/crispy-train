import { Injectable } from '@angular/core';
import { Projet } from '../modele/Projet';
import { Tag } from '../modele/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

   
  lesProjets: Projet[] = [
    {id: 0, nom: "Sample Python Project", photo: ["../../assets/bibi.png","../../assets/x4vfnJX.png" ], projectLink: "//www.github.com", resume: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]},
    {id: 1, nom: "Sample Angular App", photo: ["../../assets/x4vfnJX.png","../../assets/bibi.png"], projectLink: "//www.github.com", resume: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.JAVA, Tag.SPRING]},
    {id: 2, nom: "Sample .Net App", photo: ["../../assets/bibi.png"], projectLink: "//www.github.com", resume: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JavaScript]},
    {id: 3, nom: "Web API Project", photo: ["../../assets/bibi.png"], projectLink: "//www.github.com", resume: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.ANGULAR, Tag.SPRING]},
    {id: 4, nom: "Chrome Extension", photo: ["../../assets/bibi.png"], projectLink: "//www.github.com", resume: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA, Tag.REACT]},
    {id: 5, nom: "Mobile App", photo: ["../../assets/bibi.png"], projectLink: "//www.github.com", resume: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JavaScript, Tag.CSHARP]}
  ];

  GetProjects(){
    return this.lesProjets;
  }

  GetProjectById(id: number) : Projet{
    let project = this.lesProjets.find( unProjet=>unProjet.id === id)
    if(project === undefined){
      throw new TypeError("Projet non trouvé avec l'id " + id);
    }
    return project;
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProject: Projet[] = [];
    this.lesProjets.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filter){
        if(project.tags.includes(filter)==false){
          foundAll = false;
        }
      })

      if(foundAll){
        filteredProject.push(project);
      }
    })
    return filteredProject;
  }
}
