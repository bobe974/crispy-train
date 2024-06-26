import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private rendereer: Renderer2 ) {
    this.titleService.setTitle("Etienne Baillif - A propos");
  }

  DownloadFile(){
    const link = this.rendereer.createElement('a');
    link.setAttribute('targer','_blank');
    link.setAttribute('href','../../assets/CV.pdf');
    link.setAttribute('download', 'CV.pdf');
    link.click();
    link.remove();
  }
}
