import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChromePage } from './chrome';

@NgModule({
  declarations: [
    ChromePage,
  ],
  imports: [
    IonicPageModule.forChild(ChromePage),
  ],
})
export class ChromePageModule {}
