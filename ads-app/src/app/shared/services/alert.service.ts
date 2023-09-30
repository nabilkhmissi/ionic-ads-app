import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AlertService {

  constructor(private alertController: AlertController) { }

  private notificationSubject = new BehaviorSubject<string | null>(null)

  notification$ = this.notificationSubject.asObservable();

  showNotification(message: string) {
    this.presentAlert(message)
    this.notificationSubject.next(message)
  }

  hideNotification() {
    this.notificationSubject.next(null)
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
