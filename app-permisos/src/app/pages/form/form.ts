import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Footer } from '../../components/fotter/footer';
import { FormFields } from '../../components/modals/form-modal/form-modal';
import { Nav } from '../../components/nav/nav';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [Nav, Footer, NgComponentOutlet],
  templateUrl: './form.html',
  styleUrl: './form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {
  protected readonly formFieldsComponent = FormFields;
}
