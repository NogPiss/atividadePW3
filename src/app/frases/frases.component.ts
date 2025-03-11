import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent implements OnInit {

  @Input()exibe : boolean = true;
  texto = '';

  frases: string[] = [
    "A vida é uma jornada, não um destino.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Acredite em você e tudo será possível.",
    "Grandes sonhos começam com pequenos passos.",
    "O impossível é só questão de opinião.",
    "A persistência leva à perfeição.",
    "Cada dia é uma nova oportunidade para recomeçar.",
    "Seja a mudança que você deseja ver no mundo.",
    "Nada é impossível para um coração determinado.",
    "Aprenda com o passado, viva o presente e sonhe com o futuro."
  ];

  ngOnInit(): void {
    this.trocaFrase();
  }

  trocaFrase(){
    this.texto = this.frases[Math.floor(Math.random() * 100) % 10];
  }
}
