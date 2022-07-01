import { Component } from '@angular/core';
import { FakestoreService } from './fakestore.service';
import { Category } from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakestoreapi';

  categories: string[] = [];
  products: string[] = [];

  constructor(private fakestoreService: FakestoreService) {
    fakestoreService.getCategories().subscribe(data => this.categories = data);
  }

  onSelectCategory(e: any) {

    if (!e.target.value) {
      this.products = [];
      return;
    }

    this.fakestoreService.getProducts(e.target.value).subscribe(data => {
      this.products = data.map(p => p.title);
    });
  }

}
