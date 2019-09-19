import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';

const URL = 'https://jsonplaceholder.typicode.com';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${URL}/posts`, options);
  }

  createPost(post: Post) {
    return this.http.post(`${URL}/posts`, post, options);
  }
}
