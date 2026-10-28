import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthModal } from '../../components/modals/auth-modal/auth-modal';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AuthModal],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Auth {}
