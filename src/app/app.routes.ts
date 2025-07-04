import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { TemplateDriven } from './formulaire/template-driven/template-driven';
import { ReactiveForms } from './formulaire/reactive-forms/reactive-forms';
import {ExempleDirectives} from './exemple-directives/exemple-directives';
import {ExemplePipe} from './exemple-pipe/exemple-pipe';
import {ExempleTemplate} from './exemple-template/exemple-template';
import {Acceuil} from './exercice/acceuil/acceuil';
import {Formulaire} from './exercice/formulaire/formulaire';
import {UsersList} from './services/users-list/users-list';
import {AddUser} from './services/add-user/add-user';

export const routes: Routes = [
  { path: '', redirectTo: 'data-binding', pathMatch: 'full' },
  { path: 'data-binding', component: DataBinding },
  { path: 'template-driven', component: TemplateDriven },
  { path: 'reactive-form', component: ReactiveForms },
  { path: 'directives', component: ExempleDirectives },
  { path: 'pipes', component: ExemplePipe },
  { path: 'templates', component: ExempleTemplate },
  { path: 'exercice-accueil', component: Acceuil },
  { path: 'exercice-formulaire', component: Formulaire },
  { path: 'users', component: UsersList },
  { path: 'add-user', component: AddUser },

];
