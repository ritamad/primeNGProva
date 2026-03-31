import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Inventory } from './inventory/inventory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Inventory],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('primeNgProva');
}
