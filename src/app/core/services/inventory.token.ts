import { InjectionToken } from '@angular/core';
import { IInventoryService } from './inventory.interface';

export const INVENTORY_SERVICE = new InjectionToken<IInventoryService>('InventoryService');
