import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MenuController, NavController, ToastController } from "@ionic/angular";
;




@Injectable({ providedIn: 'root' })

export class ToastService {
  constructor(
    private toastController: ToastController) {
  }


  /**
   * show message error
   * @params message string
   */
  async showToastError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      position: "bottom",
      color: "danger"
    });
    toast.present();
  }

  /**
   * show message success
   * @params message string
   */
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      position: "bottom",
      color: "success"
    });
    toast.present();
  }

  /**
     * show message notifications
     * @params message string
     */
  async showNotification(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      position: "bottom",
      color: "dark",
    });
    toast.present();
  }

}