import { Component, Input } from '@angular/core';
import { Projet } from '../modele/Projet';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projet = {} as Projet;
  bsModelRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }
  OpenProjectModel(){
    const modalOption: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project : this.projet
      }
    }
    
    this.bsModelRef === this.modalService.show(ProjectModalComponent, modalOption);
  }
}

