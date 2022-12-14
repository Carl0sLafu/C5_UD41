import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'rickymortycrud';
  books: any[] = [];

  constructor(private servicio: BookService){}

  ngOnInit(): void {

    this.servicio.getAll().subscribe(
      result => 
        this.books = result
      );

  }
  
}
