import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/login.php`, { email, senha });
  }

  register(nome: string, email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/register.php`, { nome, email, senha });
  }

  getProducts(page: number = 1, categoria: string = '') {
    const params = categoria ? `&categoria=${categoria}` : '';
    return this.http.get(`${this.apiUrl}/list_products.php?page=${page}${params}`);
  }

  createProduct(formData: FormData) {
    return this.http.post(`${this.apiUrl}/create_product.php`, formData);
  }
}
