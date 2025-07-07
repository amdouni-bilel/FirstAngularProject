import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersModel} from './users.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<UsersModel[]>(this.apiUrl)
  }

  addUser(user: Partial<UsersModel>): Observable<UsersModel> {
    return this.http.post<UsersModel>(this.apiUrl, user)
  }


}
