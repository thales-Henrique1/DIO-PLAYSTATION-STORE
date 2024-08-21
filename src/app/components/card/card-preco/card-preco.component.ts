import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  standalone: true,
  imports: [],
  templateUrl: './card-preco.component.html',
  styleUrl: './card-preco.component.css'
})
export class CardPrecoComponent {
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
}
