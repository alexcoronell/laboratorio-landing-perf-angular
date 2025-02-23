import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { ImgComponent } from './components/img/img.component';

@NgModule({
  declarations: [
    ImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgComponent]
})
export class SharedModule { }
