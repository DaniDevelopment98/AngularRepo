import { Component } from '@angular/core';
import { ServiciosService } from './Modelos/API/servicios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ServiciosService]
})
export class AppComponent {
  title = 'ApiAngularFinal';

  
}
