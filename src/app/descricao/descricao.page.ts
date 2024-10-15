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

  modoDeEdicao = false;

  iniciarEdicao(){
    this.modoDeEdicao = true;
  }

  salvarEdicao() {
    this.modoDeEdicao = false;
    
  }

  cancelarEdicao() {
    this.modoDeEdicao = false;
    
  }

  video: videos = {
    titulo: '',
    descricao: '',
  }
  constructor(
    @Inject(VideosService) private service:VideosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.video = this.service.getVideo(parseInt(this.route.snapshot.paramMap.get('id') ?? '0'))
  }

}
