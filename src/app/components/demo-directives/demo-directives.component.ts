import { Component, ViewChild } from '@angular/core';
import { TransformcolorDirective } from '../../directives/transformcolor.directive';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.css',
  providers: []
})
export class DemoDirectivesComponent {
  colors: Array<string>;
  color: string;
  color2: string;
  isShow: string;
  texto: string;

  demoNumber: number;

  @ViewChild(TransformcolorDirective) directiva!: TransformcolorDirective;

  constructor(private core: CoreService) {
    this.colors = ['Azul', 'Negro', 'Rojo', 'Verde'];
    this.color = 'Negro';
    this.color2 = 'Negro';
    this.isShow = 'true';
    this.texto = 'Trabajando con Directivas';

    this.demoNumber = this.core.testNumber;
  }

  onClick() {
    alert('Click - Componente');
  }

  onChangeSelect() {
    this.directiva.colorName = this.color;
    this.directiva.ChageColor();
  }
}
