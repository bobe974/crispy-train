import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Etienne Baillif - A propos");
  }
}
