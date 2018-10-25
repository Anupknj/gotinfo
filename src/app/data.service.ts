import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    public current;
    public books = [
        {
            "id": "1",
            "url": "https://anapioficeandfire.com/api/books/1",
            "name": "A Game of Thrones1"
        },
        {
            "id": "2",
            "url": "https://anapioficeandfire.com/api/books/2",
            "name": "A Game of Thrones2"
        },
        {
            "id": "3",
            "url": "https://anapioficeandfire.com/api/books/3",
            "name": "A Game of Thrones3"
        }

    ]
    constructor() { }

    public getbooks():any {
        return this.books;
    }

    public singleinfo(currentid): any {
        for (let book of this.books) {
            if (book.id == currentid) {
                this.current = book;

            }
        }
        return(this.current);
    }
}
