import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  allPosts: Post[];
  fechaActual: Date;
  arrCategorias: string[]
  randomImage: number;

  constructor() {
    this.randomImage = Math.round(Math.random() * (800 - 200) + 200);
    this.fechaActual = new Date();
    //this.fechaActual.getDate();
    this.arrCategorias = ['electronica','videojuegos','viajes','general','inversiones','orgias']

    this.allPosts = [
      {
        titulo: 'Citra, el emulador de Nintendo 3DS, llega a Android mediante Google Play',
        texto: 'Después de una larga espera el emulador de código abierto Citra se encuentra disponible en Android gracias a una aplicación que se puede descargar de forma gratuita mediante Google Play. No es la primera vez que se libera una versión de este conocido emulador de Nintendo 3DS para el sistema operativo móvil, pero en esta ocasión se trata de una aplicación oficial y totalmente funcional de Citra.',
        autor: 'Benzo',
        imagen: 'https://images.elotrolado.net/headers/upload/c/b/cbf445_citra-android_news.jpg?1200',
        fecha: this.fechaActual,
        categoria: 'videojuegos'
      },
      {
        titulo: 'Ed Boon afirma que se subestima el impacto que tendrán los tiempos de carga casi nulos de PS5 y Xbox Series X',
        texto: 'Ed Boon, cocreador de Mortal Kombat y director creativo de NetherRealm Studios, ha hablado sobre las prestaciones de PlayStation 5 y Xbox Series X durante una entrevista concedida a Geoff Keighley en el marco de la Summer Game Fest. En concreto, el desarrollador ha querido poner en valor la velocidad del almacenamiento SSD NVME que incluirán ambas consolas.',
        autor: 'Benzo',
        imagen: 'https://images.elotrolado.net/headers/upload/c/c/cc7245_xbox-series-x_news.jpg?1200',
        fecha: this.fechaActual,
        categoria: 'general'
      },
      {
        titulo: 'Pac-Man Live Studio llegará en junio a Twitch con modo cooperativo, editor de niveles y el juego clásico',
        texto: 'Tal día como hoy, pero en 1980, nació Pac-Man. El popular personaje de Bandai Namco diseñado por Tōru Iwatani cumple 40 años y el editor japonés piensa celebrarlo de múltiples maneras, incluyendo el lanzamiento de Pac-Man Live Studio. Esta versión ampliada del clásico juego arcade estará disponible vía web mediante un canal dedicado en Twitch que abrirá en junio. Amazon, propietario de la plataforma de streaming, ha colaborado con esta iniciativa mediante Amazon Game Studios.',
        autor: 'Benzo',
        imagen: 'https://images.elotrolado.net/headers/upload/e/f/efdf37_pac-man-live-studio_news.jpg?1200',
        fecha: this.fechaActual,
        categoria: 'viajes'
      },
      {
        titulo: 'Borderlands 3 recibirá la campaña Bounty of Blood: A Fistful of Redemption el 25 de junio',
        texto: 'Después de Moxxis Heist of the Handsome Jackpot y Armas, amor y tentáculos: La boda de Wainwright y Hammerlock, es el turno de añadir un poco de temática wéstern a Borderlands 3. Así lo ha decidido Gearbox Software, que esta tarde ha presentado Bounty of Blood: A Fistful of Redemption, la tercera campaña adicional para el shooter en primera persona cuyo lanzamiento está previsto para el 25 de junio. El complemento estará disponible como parte del pase de temporada o de forma separada a cambio de 14,99 euros.',
        autor: 'Benzo',
        imagen: 'https://images.elotrolado.net/headers/upload/7/6/76c3de_borderlands-3_news.jpg?1200',
        fecha: this.fechaActual,
        categoria: 'electronica'
      },

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
    // Desde picsum obtenemos una imagen aleatoria con un numero random
    let randomImage = Math.round(Math.random() * (800 - 200) + 200);
    let urlRandomImage = 'https://picsum.photos/id/'+randomImage+'/1100/440'
    // Obtenemos la fecha actual de cada post
    let fechaActual = new Date();
    let newPost = new Post(post.titulo,post.texto,post.autor,urlRandomImage,fechaActual,post.categoria);
    this.allPosts.push(newPost)
    console.log(newPost);
    console.log(fechaActual);


    //this.allPosts.push(post)
    //let newPost = {};
    //ewPost = (titulo: '',texto: post.texto,autor:post.autor,imagen:post.imagen,fecha: this.fechaActual,categoria:post.categoria);
    //this.allPosts.push(newPost)

  }

  getPostByCategoria(categoria): Promise<Post[]> {

    return new Promise((resolve,reject)=>{
      const filtroCategorias = []
      this.allPosts.filter((resultado)=>{
        if(resultado.categoria === categoria){
          filtroCategorias.push(resultado);
        }
        resolve(filtroCategorias);
      });
    });
  }





}
