
import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { TemplateDriven } from './formulaire/template-driven/template-driven';
import { ReactiveForms } from './formulaire/reactive-forms/reactive-forms';
import {ExempleDirectives} from './exemple-directives/exemple-directives';
import {ExemplePipe} from './exemple-pipe/exemple-pipe';
import {ExempleTemplate} from './exemple-template/exemple-template';

export const routes: Routes = [
  { path: '', redirectTo: 'data-binding', pathMatch: 'full' },
  { path: 'data-binding', component: DataBinding },
  { path: 'template-driven', component: TemplateDriven },
  { path: 'reactive-form', component: ReactiveForms },
  { path: 'directives', component: ExempleDirectives },
  { path: 'pipes', component: ExemplePipe },
  { path: 'templates', component: ExempleTemplate }
];
