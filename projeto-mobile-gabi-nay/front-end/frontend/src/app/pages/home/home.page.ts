import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  produtos: any[] = [];
  page = 1;
  categoriaSelecionada = '';

  constructor(private apiService: ApiService) {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts(this.page, this.categoriaSelecionada).subscribe((res: any) => {
      this.produtos = res;
    });
  }

  nextPage() {
    this.page++;
    this.loadProducts();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadProducts();
    }
  }
}
