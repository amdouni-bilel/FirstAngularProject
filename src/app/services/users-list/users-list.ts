import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users-service';
import {UsersModel} from '../users.model';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-users-list',
  imports: [
    NgForOf,
    FormsModule,
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit { //juste apres le chargeement de page
  users: UsersModel[] = [];

  constructor(private readonly userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getListUsers().subscribe(
      data => this.users = data
    );
  }

  updateUser(user: UsersModel): void {
    this.userService.updateUser(user.id, user).subscribe({
      next: updated => {
        console.log('Utilisateur modifié :', updated);
        alert('Utilisateur modifié')
      },
      error: err =>
        alert('Erreur lors de la modification de l’utilisateur'),

    });
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== id);
          console.log('Utilisateur supprimé');
        },
        error: err => console.error('Erreur suppression :', err)
      });
    }
  }

}
