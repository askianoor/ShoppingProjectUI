import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping';
  products: object;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:56283/api/Products').subscribe(data => {
      this.products = data;
    });
  }
}
