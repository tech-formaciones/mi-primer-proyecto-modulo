import { Component, Input } from '@angular/core';
import { ImageDataInfo } from '../../models/image.model';

@Component({
  selector: 'app-imagesinfo',
  standalone: false,
  
  templateUrl: './imagesinfo.component.html',
  styleUrl: './imagesinfo.component.css'
})
export class ImagesinfoComponent {
  @Input() imageItem: ImageDataInfo;
  @Input() imageHeight: number;
  @Input() imageWidth: number;
  @Input() clientX: number;
  @Input() clientY: number;

  constructor() {
    this.imageItem = new ImageDataInfo();
    this.imageHeight = 0;
    this.imageWidth = 0;
    this.clientX = 0;
    this.clientY = 0;
  }
}
