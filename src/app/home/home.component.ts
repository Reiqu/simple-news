import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: any = [];
  countries = [{id: 0, code: 'de', name: 'Deutschland'}, {id: 1, code: 'usa', name: 'USA'}, {id: 2, code: 'uk', name: 'Großbritannien'}];
  categories = [{id: 0, category: 'business', name: 'Wirtschaft'}, {id: 1, category: 'entertainment', name: 'Unterhaltung'},
    {id: 2, category: 'health', name: 'Gesundheit'}, {id: 3, category: 'science', name: 'Wissenschaft'},
    {id: 4, category: 'sports', name: 'Gesundheit'}, {id: 5, category: 'technology', name: 'Technologoie'}];
  selectedCategory: string;
  selectedCountry: string;

  constructor(private newsservice: NewsService) {

  }
  showNews(country: string, category: string) {
    this.newsservice.getNews(country, category)
      .subscribe(data => {
        return this.news = Object.values(data)[2];
      });
  }
  onChangeNews() {
    this.showNews(this.selectedCountry, this.selectedCategory);
  }

    ngOnInit() {
    this.showNews('de', 'business');
  }
}
