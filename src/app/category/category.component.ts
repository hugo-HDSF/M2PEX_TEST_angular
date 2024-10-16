import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  playerName = '';
  @Input() searchedCategory: string = '';
  @Input() categories = this.categoriesService.categoriesContent;
  filteredCategories: any[] = this.categories;

  constructor(
    private router: Router,
    private authService: AuthService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.authService.isUserConnected();
    this.categoriesService.getCategoriesContent();

    this.playerName = this.authService.user?.username || '';
  }

  searchCategories() {
    if (this.searchedCategory.trim()) {
      this.filteredCategories = this.categories.filter((category) =>
        category.label
          .toLowerCase()
          .includes(this.searchedCategory.toLowerCase())
      );
    }
  }

  resetSearch() {
    this.searchedCategory = '';
    this.filteredCategories = this.categories;
  }

  navigateToQuiz(id: string) {
    this.router.navigate(['/quiz', id]);
  }
}
