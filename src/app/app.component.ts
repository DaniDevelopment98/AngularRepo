import { Component } from '@angular/core';
import { ProductsService } from './pages/products/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ProductsService]
})
export class AppComponent {
  title = 'ApiAngularFinal';

  
}
