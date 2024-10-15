import { Component, OnInit, Inject} from '@angular/core';
import { VideosService, videos } from '../videos.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  imports: [NgFor, RouterLink],
  standalone: true,
})
export class ListagemComponent  implements OnInit {

  constructor(
    @Inject(VideosService) private service: VideosService) { }

  videos: videos[] = [];

  ngOnInit() {
    this.videos=this.service.getAll();
    console.log(this.videos);
  }

}
