import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorPickerService, Hsva, Rgba } from 'ngx-color-picker';

@Component({
  selector: 'app-multiple-colorpicker',
  standalone: false,
  
  templateUrl: './colorpicker.component.html',
  styleUrl: './colorpicker.component.css'
})
export class ColorpickerComponent implements OnInit {
    @Output() eventChangeColor = new EventEmitter();
    arrayColors: any = new Array<string>();
    selectedColor: string;

    constructor(private colorPickerService: ColorPickerService) {
        this.arrayColors['color'] = '#2883e9';
        this.arrayColors['color2'] = '#e920e9';
        this.arrayColors['color3'] = 'rgb(255,245,0)';
        this.arrayColors['color4'] = 'rgb(236,64,64)';
        this.arrayColors['color5'] = 'rgba(45,208,45,1)';

        this.selectedColor = 'color';
    }

    rgbaToCmyk(rgba: Rgba): Cmyk {
        let cmyk: Cmyk = new Cmyk(0, 0, 0, 0), k: number;
        k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k == 1) return new Cmyk(0, 0, 0, 1);
        cmyk.c = (1 - rgba.r - k) / (1 - k);
        cmyk.m = (1 - rgba.g - k) / (1 - k);
        cmyk.y = (1 - rgba.b - k) / (1 - k);
        cmyk.k = k;
        return cmyk;
    }

    onChangeColor(color: string): Cmyk {
        console.log('p1:' + color);
        return this.rgbaToCmyk(this.colorPickerService.hsvaToRgba(this.colorPickerService.stringToHsva(color) as Hsva));
    }

    onChangeColorHex8(color: string): string {
        console.log('p2:' + color);
        return this.colorPickerService.outputFormat(this.colorPickerService.stringToHsva(color, true) as Hsva, 'rgba', 'true');
    }

    onChangeSelectColor(e: any) {
        this.eventChangeColor.emit(this.arrayColors[this.selectedColor]);
    }

    ngOnInit() {
    }
}

export class Cmyk {
    constructor(public c: number, public m: number, public y: number, public k: number) { }
}
