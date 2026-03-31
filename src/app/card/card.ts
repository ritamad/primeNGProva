import { Component, signal } from '@angular/core';

import { CardModule } from 'primeng/card';
import { card } from './card.model';
import { MessageModule } from 'primeng/message';
import { ItemDialog } from '../item-dialog/item-dialog';

@Component({
  selector: 'app-card',
  imports: [CardModule, MessageModule, ItemDialog],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  summary: card[] = [
    {
      label: 'Totale articoli',
      total: 555,
      note: '12 categorie',
    },

    {
      label: 'Sotto soglia',
      total: 8,
      note: 'Riordine consigliato',
    },

    {
      label: 'Critici',
      total: 3,
      note: 'Stock esaurito',
    },
  ];

  message: string = 'Attenzione: uno o più articoli sono sotto soglia.';
  isVisible = signal(false);

  showDialog() {
    this.isVisible.set(true);
  }
}
