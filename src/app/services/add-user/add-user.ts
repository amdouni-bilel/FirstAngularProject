import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {UsersModel} from '../users.model';
import {UsersService} from '../users-service';

@Component({
  selector: 'app-add-user',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
  userForm : FormGroup ;
  constructor(private fb: FormBuilder , private userService: UsersService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]]
    });

  }
  submitForm(): void {
    if (this.userForm.valid) {
      const user: Partial<UsersModel> = this.userForm.value;
      this.userService.addUser(user).subscribe({
        next: (res) => {
          console.log('Utilisateur ajouté :', res);
          alert(`Utilisateur ${res.name} ajouté avec succès !`);
          this.userForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout', err);
          alert('Une erreur est survenue');
        }
      });
    }
  }

}
