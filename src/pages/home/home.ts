import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InAppBrowserObject } from '@ionic-native/in-app-browser';

import { IabServiceProvider } from '../../providers/iab-service/iab-service';

import {AboutPage} from '../about/about';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private browser: InAppBrowserObject;
  private homeForm: FormGroup;
  private targets: string[] = ['_blank', '_self', '_system'];

  constructor(
    private formBuilder: FormBuilder,
    private iabService: IabServiceProvider,
    public navCtrl: NavController
  ) {
    this.homeForm = this.formBuilder.group({
      url: ['https://', Validators.required],
      target: ['_blank', Validators.required]
    });
  }

  // openWebpage(url: string, target?: string): void {
  //   let iabTarget: string;
  //   if (url !== '') {
  //     switch (target) {
  //       case '_self':
  //       case '_system':
  //         iabTarget = target;
  //         break;
  //       default:
  //       iabTarget = '_blank';
  //     }
  //     this.browser = this.iabService.iab.create(url, iabTarget, this.iabService.iabSettings);
  //   } else {
  //     // display alert
  //   }
  // }
  openWebpage(): void {
    let iabTarget: string;
    let url: string;
    url = 'https://www.facebook.com/%E0%B6%BA%E0%B7%9E%E0%B7%80%E0%B6%B1-%E0%B7%83%E0%B6%B8%E0%B7%8F%E0%B6%A2-457850494645379/';
    iabTarget = '_self';
      this.browser = this.iabService.iab.create(url, iabTarget, this.iabService.iabSettings);
  }

  // checkInput(target: string): void {
  //   if (this.homeForm.value.url !== '') {
  //     this.openWebpage(this.homeForm.value.url, this.homeForm.value.target);
  //   }
  // }

  checkInput(): void {

      this.openWebpage();

  }
  // tslint:disable-next-line:one-line
  navigateToAbout(){
    this.navCtrl.push('AboutPage');
  }

  

}
