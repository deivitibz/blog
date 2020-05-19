import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  onSubmitFormulario(formValue){
    this.post = formValue;
    this.postService.arrPost.push(this.post);


  }


}
