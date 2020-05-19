import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post: Post;
  arrPost: Post[];

  constructor() {
    this.arrPost = []
  }

  ngOnInit(): void {




  }

  getAllPost(): Promise<Post[]>{

    return new Promise((resolve,reject)=>{
      console.log(this.arrPost);
      resolve(this.arrPost);
    })

  }
}
