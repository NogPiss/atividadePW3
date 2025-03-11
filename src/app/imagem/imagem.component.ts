import { Input } from '@angular/core';
import { Component/*, OnInit */} from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent/* implements OnInit */{

  biscoitoaberto = "biscoito-aberto.png"
  biscoitofechado = "biscoito.png"
  currentImage: string = this.biscoitoaberto
/*
  ngOnInit(){
    this.trocaImagem();
  }
*/
  @Input()quebrado : boolean = true;

/*
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
*/
}
