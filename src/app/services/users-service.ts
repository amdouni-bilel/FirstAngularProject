import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsersModel} from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  // 🔹 Obtenir la liste des utilisateurs
  getListUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(this.apiUrl);
  }

  // 🔹 Ajouter un utilisateur
  addUser(user: Partial<UsersModel>): Observable<UsersModel> {
    return this.http.post<UsersModel>(this.apiUrl, user);
  }

  // 🔹 Mettre à jour un utilisateur
  updateUser(id: number, user: Partial<UsersModel>): Observable<UsersModel> {
    return this.http.put<UsersModel>(`${this.apiUrl}/${id}`, user);
  }

  // 🔹 Supprimer un utilisateur
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
