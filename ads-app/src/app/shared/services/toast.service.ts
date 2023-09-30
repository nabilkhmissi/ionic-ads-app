import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ToastService {
    constructor(private toastController: ToastController) { }


    showToast(message: string) {
        this.presentToast(message)
    }

    private async presentToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1500,
            position: 'top',
            color: 'tertiary'
        });

        await toast.present();
    }
}