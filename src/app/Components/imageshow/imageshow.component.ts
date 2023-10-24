import { Component } from '@angular/core';

@Component({
  selector: 'app-imageshow',
  templateUrl: './imageshow.component.html',
  styleUrls: ['./imageshow.component.css']
})
export class ImageshowComponent {

  Imgarr:string[] = [
    "assets/images/car1.jpg",
    "assets/images/car2.jpg",
    "assets/images/car3.jpg",
    "assets/images/car4.jpg"
  ];
  index:number = 0;
  isPaly:boolean = false;
  galleryInterval:any;

  ChangeImage(x:any){
    this.index = (this.index + 1) % this.Imgarr.length;
    x.src = this.Imgarr[this.index];
  }

  PrvImage(x:any){
    if(this.index==0)
      this.index=this.Imgarr.length;
    this.index--;
    x.src=this.Imgarr[this.index];
  }

  NextImage(x:any){
    this.ChangeImage(x);
  }

  Start(x:any){
    if(this.isPaly == false){
      this.galleryInterval = setInterval(() => {
        this.ChangeImage(x)
      },1000);
    }
  }

  Stop(){
    clearInterval(this.galleryInterval);
  }
}
