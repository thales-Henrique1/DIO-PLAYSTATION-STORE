import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPrecoComponent } from './card-preco/card-preco.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardLabelComponent,
    CardPrecoComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  gamelabel: string = ""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  @Input()
  gameCover: string = ""

}
