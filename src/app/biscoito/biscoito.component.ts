import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {

  quebrabiscoito(){
    this.quebrado = true;
    this.trocaFrase();
    this.exibe = false;
  }

  regenBiscoito(){
    this.quebrado = false;
    this.trocaFrase();
    this.exibe = true;
  }


  quebrado : boolean = true;

  biscoitoaberto = "biscoito-aberto.png"
  biscoitofechado = "biscoito.png"
  currentImage: string = this.biscoitoaberto

  trocaImagem(){
    const ImagemAtual = localStorage.getItem('currentImage');
    if(ImagemAtual === this.biscoitoaberto){
      this.currentImage = this.biscoitofechado;
    }
    else{
      this.currentImage = this.biscoitoaberto;
    }

    localStorage.setItem('currentImage', this.currentImage)

  }

  exibe : boolean = true;
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
    "Aprenda com o passado, viva o presente e sonhe com o futuro.",
    "Se o homem quiser o mundo quadrado ele deixa."
  ];

  trocaFrase(){
    this.texto = this.frases[Math.floor(Math.random() * 100) % 10];
  }
}
