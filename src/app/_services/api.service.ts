import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../modele/Projet';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9000/api';

  constructor(private http: HttpClient) { }

  getAllProjets(): Observable<Projet[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projet`).pipe(
      map(response => response.map(item => this.transformToProjet(item)))  
    );
  }

  getProjetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projet/${id}`);
  }

  createProjet(projetData: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.apiUrl}/projet`, projetData);
  }

  updateProjet(id: number, projetData: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.apiUrl}/projet/${id}`, projetData);
  }

    // Méthode pour transformer les données de l'API en objets Projet
    private transformToProjet(item: any): Projet {
      return {
        id: item.id,
        nom: item.nom,
        resume: item.resume,
        description: item.description,
        projectLink: item.link,
        photo: item.photos,
        tags: item.tags || []
      };
    }
  
    // Méthode pour transformer les objets Projet en format API
    private transformFromProjet(projet: Projet): any {
      return {
        id: projet.id,
        nom: projet.nom,
        resume: projet.resume,
        description: projet.description,
        link: projet.projectLink,
        photos: projet.photo,
        tags: projet.tags
      };
    }
}
