import { Component } from '@angular/core';
import data from './../../data/imagesData.json';
import { ImageDataInfo } from '../../models/image.model';



@Component({
  selector: 'app-images',
  standalone: false,
  
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {
  imagesList: Array<ImageDataInfo>;
  imageSelect: ImageDataInfo;
  naturalHeight: number;
  naturalWidth: number;
  clientX: number;
  clientY: number;

  constructor() {
    this.imagesList = data as Array<ImageDataInfo>;
    this.imageSelect = new ImageDataInfo();
    this.naturalHeight = 0;
    this.naturalWidth = 0;
    this.clientX = 0;
    this.clientY = 0;
  }

  onImageClick(imageItem: ImageDataInfo, e: Event): void {
    this.imageSelect = imageItem;

    this.naturalHeight = (e.target as HTMLImageElement).naturalHeight;
    this.naturalWidth = (e.target as HTMLImageElement).naturalWidth;
  }

  onImageVisorMouseMove(data: any): void {
    this.clientX = data.clientX;
    this.clientY = data.clientY;
  }
}
