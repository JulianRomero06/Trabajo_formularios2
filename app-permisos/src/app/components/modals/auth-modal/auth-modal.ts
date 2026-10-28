import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModal {}
