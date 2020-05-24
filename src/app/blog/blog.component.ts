import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  allPosts: Post[];
  categorias: string[]

  constructor(private postService: PostService) {
    this.allPosts = [];
    this.categorias = this.postService.arrCategorias;
  }

  async ngOnInit() {
    this.allPosts = await this.postService.getAllPost()
  }

}
