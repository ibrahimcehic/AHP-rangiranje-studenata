import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unos-kriterija',
  templateUrl: './unos-kriterija.component.html',
  styleUrls: ['./unos-kriterija.component.css']
})
export class UnosKriterijaComponent {
  @Input() studetForm!: FormGroup;

}
