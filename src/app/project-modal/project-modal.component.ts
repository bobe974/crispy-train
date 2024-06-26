import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Projet } from '../modele/Projet';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  project = {} as Projet;
  constructor(public bsModalRef: BsModalRef) {
    
  }
}
