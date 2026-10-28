import { Routes } from '@angular/router';
import { Form } from './pages/form/form';
import { Auth } from './pages/auth/auth';

export const routes: Routes = [
	{
		path: '',
		component: Auth,
	},
  {
    path: 'form',
    component: Form,
  }
];
