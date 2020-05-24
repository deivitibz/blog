import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  arrCategorias: string[]

  @ViewChild('selector') selector: ElementRef

  constructor(private postService: PostService){
      this.arrCategorias = this.postService.arrCategorias;


    }

    getPostByCategoria(){
      let categoria = this.selector.nativeElement.value;
      let arrFiltrado = []
      this.postService.getPostByCategoria(this.selector.nativeElement)
      console.log();

      }

}
