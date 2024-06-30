import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './_services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'PortfolioWebsite';
  constructor(private service: ProjectsService) {
    console.log("$$$$$INJECTION$$$$$");
   }
}
