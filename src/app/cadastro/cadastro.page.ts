import { Component, OnInit } from '@angular/core';
import { VideosService, videos } from '../videos.service';
import { Router } from '@angular/router';
import { ServiceToastService } from '../service-toast.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  video: videos = {
    titulo: '',
    descricao: ''
  };

  constructor(
    private service: VideosService,
    private router: Router,
    private toastService: ServiceToastService
  ) { }

  adicionarVideo() {
    this.service.addVideo(this.video);
    this.toastService.presentToast('Vídeo adicionado com sucesso!', 3000, 'top');
    this.router.navigate(['/listagem']);
  }

  ngOnInit() {
  }

}
