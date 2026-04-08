import { Injectable } from '@angular/core';
import { IInventoryService, Item } from './inventory.interface';
import { delay, Observable, of } from 'rxjs';

const MOCK_ITEMS: Item[] = [
  {
    id: 1,
    articolo: 'Cavi HDMI',
    categoria: 'Hardware',
    disponibili: 2,
    sogliaMinima: 5,
    stato: 'Basso',
  },
  {
    id: 2,
    articolo: "Boccioni dell'acqua",
    categoria: 'Alimentari',
    disponibili: 2,
    sogliaMinima: 10,
    stato: 'Critico',
  },
  {
    id: 3,
    articolo: 'Sedie ergonomiche',
    categoria: 'Arredo',
    disponibili: 20,
    sogliaMinima: 20,
    stato: 'OK',
  },
  {
    id: 4,
    articolo: 'Mouse',
    categoria: 'Hardware',
    disponibili: 1,
    sogliaMinima: 20,
    stato: 'Critico',
  },
  {
    id: 5,
    articolo: 'Tastiere',
    categoria: 'Hardware',
    disponibili: 8,
    sogliaMinima: 10,
    stato: 'Basso',
  },
  {
    id: 6,
    articolo: 'Carta A4',
    categoria: 'Cancelleria',
    disponibili: 3,
    sogliaMinima: 50,
    stato: 'Critico',
  },
  {
    id: 7,
    articolo: 'Monitor 27"',
    categoria: 'Hardware',
    disponibili: 5,
    sogliaMinima: 5,
    stato: 'OK',
  },
  {
    id: 8,
    articolo: 'Caffè (kg)',
    categoria: 'Alimentari',
    disponibili: 1,
    sogliaMinima: 4,
    stato: 'Basso',
  },
  {
    id: 9,
    articolo: 'Webcam HD',
    categoria: 'Elettronica',
    disponibili: 3,
    sogliaMinima: 8,
    stato: 'Critico',
  },
  {
    id: 10,
    articolo: 'Penne e matite',
    categoria: 'Cancelleria',
    disponibili: 15,
    sogliaMinima: 30,
    stato: 'Basso',
  },
];

@Injectable()
export class MockInventoryService implements IInventoryService {
  getItems(): Observable<Item[]> {
    return of(MOCK_ITEMS).pipe(delay(300));
  }
}
