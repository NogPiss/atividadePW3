import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

  @Input() classe1: string = "";
  @Input() classe2: string = "";
  
  @Input()exibe : boolean = true;
  

}
