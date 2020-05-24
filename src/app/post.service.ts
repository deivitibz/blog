import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  allPosts: Post[];
  fechaActual: Date;
  arrCategorias: string[]

  constructor() {
    this.fechaActual = new Date();
    this.fechaActual.getDate();
    this.arrCategorias = ['electronica','videojuegos','viajes','general','inversiones','orgias']

    this.allPosts = [
      {
        titulo: 'esto es una prueba',
        texto: 'esto es una prueba',
        autor: 'esto es una prueba',
        imagen: 'esto es una prueba',
        fecha: this.fechaActual,
        categoria: 'esto es una prueba'
      }
    ]
  }

  ngOnInit(): void {

  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.allPosts)
    })
  }


  addPost(post: Post) {
    this.allPosts.push(post)
  }

  getPostByCategoria(categoria) {
    console.log(categoria);

  }


}
