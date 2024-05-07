import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, desc: string) {
    const postData: Post = { title: title, desc: desc };
    this.http
      .post<Post>(
        'https://angulartest-92fb2-default-rtdb.firebaseio.com/posts.json',
        postData,
      )
      .subscribe(
        (response) => {
          console.log('sadsa');
        },
        (error) => {
          this.error.next(error.message);
        },
      );
  }

  fetchPosts() {
    let SearchParams = new HttpParams();
    SearchParams.append('print', 'data1');
    SearchParams.append('key', 'value');
    return this.http
      .get<{
        [key: string]: Post;
      }>('https://angulartest-92fb2-default-rtdb.firebaseio.com/posts.json', {
        headers: new HttpHeaders({ 'Custom-header': 'Angular' }),
        params: SearchParams,
      })
      .pipe(
        map((responseData) => {
          const postArry: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArry.push({ ...responseData[key], id: key });
            }
          }
          return postArry;
        }),
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://angulartest-92fb2-default-rtdb.firebaseio.com/posts.json',
    );
  }
}
