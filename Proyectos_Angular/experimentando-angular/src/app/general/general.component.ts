import { Component } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

  nombre: string = "Jorddy"
  apellido: string = "Castro"
  edad: number = 32
}
