import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceToastService {

  constructor(private toastCtrl: ToastController) { }

  async presentToast(message: string, duration:number,
    position: 'top' | 'bottom'){
      const toast = await this.toastCtrl.create({
        message,
        duration,
        position
      });
      toast.present();
    }
}
