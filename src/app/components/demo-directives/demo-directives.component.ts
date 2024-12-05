import { Component, ViewChild } from '@angular/core';
import { TransformcolorDirective } from '../../directives/transformcolor.directive';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.css'
})
export class DemoDirectivesComponent {
  colors: Array<string>;
  color: string;
  color2: string;

  @ViewChild(TransformcolorDirective) directiva!: TransformcolorDirective;

  constructor() {
    this.colors = ['Azul', 'Negro', 'Rojo', 'Verde'];
    this.color = 'Negro';
    this.color2 = 'Negro';
  }

  onClick() {
    alert('Click - Componente');
  }

  onChangeSelect() {
    this.directiva.colorName = this.color;
    this.directiva.ChageColor();
  }
}
