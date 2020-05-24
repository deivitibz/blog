import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  allPosts: Post[];
  fecha: Date;
  form: FormGroup;

  constructor(private postService: PostService, private router: Router) {
    ;
    this.form = new FormGroup({
      titulo: new FormControl('', Validators.required),
      texto: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
      /*
      fecha: new FormControl('', Validators.required), */
      categoria: new FormControl('', Validators.required),
    })

    this.allPosts = [];
  }

  ngOnInit(): void {
  }

  onSubmitFormulario(formValue: Post) {
    this.postService.addPost(formValue)
    this.allPosts = this.postService.allPosts;
    this.router.navigate(['blog']);

  }

}
