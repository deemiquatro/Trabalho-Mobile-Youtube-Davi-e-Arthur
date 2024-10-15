import { Component, OnInit, Inject} from '@angular/core';
import { VideosService, videos } from '../videos.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceToastService } from '../service-toast.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  constructor(
    @Inject(VideosService) private service: VideosService,
    private toastService: ServiceToastService)
  { }

  videos: videos[] = [];

  

  ngOnInit() {
    this.videos=this.service.getAll();
    console.log(this.videos);
  }

  removerVideo(index: number) {
    this.videos.splice(index, 1);
    this.toastService.presentToast('Vídeo removido com sucesso', 3000, 'top');
  }
}
