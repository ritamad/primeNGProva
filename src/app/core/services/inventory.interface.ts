import { Observable } from 'rxjs';

export interface Item {
  id: number;
  articolo: string;
  categoria: 'Hardware' | 'Alimentari' | 'Arredo' | 'Cancelleria' | 'Elettronica';
  disponibili: number;
  sogliaMinima: number;
  stato: 'OK' | 'Basso' | 'Critico';
}

export interface IInventoryService {
  getItems(): Observable<Item[]>;
}
