import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  randomImage: number;

  @Input() posts: Post[];

  ngOnInit(): void {
  }


  constructor(private postService: PostService ) {

    this.randomImage = Math.random() * (800 - 200) + 200;
    this.randomImage = Math.round(this.randomImage);
  }

  deletePost(indice){
    this.postService.allPosts.splice(indice,1)
    //this.posts.splice(indice,1)
    console.log(this.postService.allPosts);


  }

}
