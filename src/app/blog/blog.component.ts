import { Component, OnInit, ElementRef, ViewChild, Renderer2, ViewChildren } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { children } from './../../../../../Proyectos/ferreteriameneses.com/wp-includes/js/dist/blocks';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild('categorias') filtroCategorias: ElementRef

  allPosts: Post[];
  categorias: string[]

  constructor(private postService: PostService) {
    this.allPosts = [];
    this.categorias = this.postService.arrCategorias;

  }

  async ngOnInit() {
    this.allPosts = await this.postService.getAllPost()
  }

  async filtroCategoria($event){
    let categorias = $event.target.attributes['value'].value
    this.allPosts = await this.postService.getPostByCategoria(categorias)

    console.log($event.target.attributes['value'].value);
    console.log(this.allPosts);

  }

}
