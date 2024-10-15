import { Component, Inject, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { videos } from '../videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {
  videoOriginal: any = {};
  modoDeEdicao = false;
  idVideo: number = 0;

  iniciarEdicao(){
    this.videoOriginal = {...this.video };
    this.modoDeEdicao = true;
  }

  salvarEdicao() {
    this.service.atualizarVideo(this.idVideo, this.video);
    this.modoDeEdicao = false;
  }

  cancelarEdicao() {
    this.video = {...this.videoOriginal };
    this.modoDeEdicao = false;
  }

  video: videos = {
    titulo: '',
    descricao: '',
  }
  constructor(
    @Inject(VideosService) private service:VideosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idVideo = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.video = this.service.getVideo(this.idVideo);
  }

}
