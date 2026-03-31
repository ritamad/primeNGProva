import { Component, inject, signal } from '@angular/core';

import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { INVENTORY_SERVICE } from '../services/inventory.token';
import { Item } from '../services/inventory.interface';

@Component({
  selector: 'app-inventory',
  imports: [TableModule, SelectModule, FormsModule, InputTextModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
  private inventoryService = inject(INVENTORY_SERVICE);
  items = signal<Item[]>([]);

  ngOnInit() {
    this.inventoryService.getItems().subscribe((data) => {
      this.items.set(data);
    });
  }
}
