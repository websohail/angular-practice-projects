import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  newTitle:string ='';
  newAuthor:string = '';
  newBooks:Book[] = [];
  ngOnInit(): void {
    let getBooks = localStorage.getItem('booksList');
    this.newBooks = getBooks ? JSON.parse(getBooks) : [];  
  }
  addbook(){
    if(this.newTitle.trim().length && this.newAuthor.trim().length){
      let books_object: Book = {
        id: Date.now(),
        title: this.newTitle,
        author:this.newAuthor
      } 
      this.newBooks.push(books_object);
      this.newTitle = '';
      this.newAuthor = '';
      localStorage.setItem('booksList', JSON.stringify(this.newBooks));
    }
  }
  deleteRecord(index:number){
    this.newBooks.splice(index, 1);
    localStorage.setItem('booksList', JSON.stringify(this.newBooks));
  }
}
