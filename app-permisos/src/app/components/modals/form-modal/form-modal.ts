import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const GOOGLE_SHEETS_WEB_APP_URL = 'https://docs.google.com/spreadsheets/d/1cC1Z8pt00mfhjyl4FRjycNHwDJe3nkqrPMNsRgJKO0k/edit?gid=0#gid=0';

@Component({
  selector: 'app-formfields',
  standalone: true,
  imports: [NgIf],
  templateUrl: './form-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFields {
  isSubmitting = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const payload = Object.fromEntries(new FormData(form).entries());

    this.isSubmitting = true;
    this.successMessage = null;
    this.errorMessage = null;

    try {
      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      this.successMessage = 'La comisión se envió correctamente.';
      form.reset();
    } catch (error) {
      console.error(error);
      this.errorMessage = 'No se pudo guardar. Revisa la URL de Apps Script.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
