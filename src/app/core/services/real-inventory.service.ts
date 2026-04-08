import { inject, Injectable } from '@angular/core';
import { IInventoryService, Item } from './inventory.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RealInventoryService implements IInventoryService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api...blablabla';
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
