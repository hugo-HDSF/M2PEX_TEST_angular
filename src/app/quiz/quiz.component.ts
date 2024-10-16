import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  selectedCategory = '';
  playerName = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
    this.route.params.subscribe((params) => {
      console.log(params['categoryId']);

      this.quizService.selectedCategory = params['categoryId'];
      this.selectedCategory = params['categoryId'];
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
