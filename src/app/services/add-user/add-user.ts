import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UsersService} from '../users-service';

@Component({
  selector: 'app-add-user',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe({
        next: (data) => {
          console.log('Utilisateur ajouté avec succès :', data);
          this.userForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout :', err);
        }
      });
    }
  }
}
