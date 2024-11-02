import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface videos{
  titulo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})

export class VideosService {
  videos: videos[] = [
    {
      titulo: "COMO IRRITAR UM JOGADOR DE LOL #1",
      descricao: "O primeiro vídeo da saga!",
    },
    {
      titulo: "COMO IRRITAR UM JOGADOR DE LOL #2",
      descricao: "A continuação épica",
    },
    {
      titulo: "COMO IRRITAR UM JOGADOR DE LOL #3",
      descricao: "O episódio da lootcrate com o Miguel Monteiro",
    },
    {
      titulo: "COMO IRRITAR UM JOGADOR DE LOL #4",
      descricao: "O especial de natal!",
    },
  ]

  
  constructor() { }
  
  getAll(){
    return this.videos;
  }

  getVideo(index: number){
    return this.videos[index];
  }

  addVideo(video: videos) {
    this.videos.push(video);
  }

  atualizarVideo(index: number, videoAtualizado: videos) {
    this.videos[index] = { ...videoAtualizado };
  }

  adicionarVideoPromise(video: videos): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (video.titulo && video.descricao) {
          this.addVideo(video);
          resolve('Vídeo adicionado com sucesso!');
        } else {
          reject('Preencha todos os campos!');
        }
      }, 1000);
    });
  }
}
