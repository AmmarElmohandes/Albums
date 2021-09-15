import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    console.log('looo');
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  postUser(user: any) {
    return this.httpClient.post(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
  }
  getUser(id: number) {
    return this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }
  getAlbums(id: number) {
    return this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users/' + id + '/albums'
    );
  }
  getPhotos(id: number) {
    return this.httpClient.get(
      'https://jsonplaceholder.typicode.com/albums/' + 1 + '/photos'
    );
  }
}
