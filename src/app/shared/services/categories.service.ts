import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoriesContent: any[] = [];
  playerName: string = '';

  constructor(private http: HttpClient) {}

  getCategoriesContent() {
    this.categoriesContent = [];
    this.http
      .get('http://localhost:3000/categories')
      .subscribe((categories: any) => {
        this.categoriesContent = [...categories];
      });
  }

  resetCategories() {
    this.categoriesContent = [];
  }
}
