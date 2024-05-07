import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Post } from './post.model';
import { NgForOf, NgIf } from '@angular/common';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FormsModule, NgIf, NgForOf],
  providers: [PostService],
  standalone: true,
})
export class HomeComponent implements OnInit, OnDestroy {
  LoadedData: Post[] = [];
  isLoading = false;
  isFetching: boolean = true;
  error: any = null;
  postData: Post = {
    title: '',
    desc: '',
  };
  private errorSub: any = Subscription;

  constructor(
    private http: HttpClient,
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      (posts: any) => {
        this.isFetching = false;
        this.LoadedData = posts;
      },
      (error) => {
        this.error = error.message;
      },
    );
  }

  onClearPost() {
    this.postService.deletePosts().subscribe(() => {
      this.LoadedData = [];
    });
  }

  onSubmit() {
    this.postService.createAndStorePost(
      this.postData.title,
      this.postData.desc,
    );
    this.postData.title = '';
    this.postData.desc = '';
  }

  ngOnDestroy() {}
}
