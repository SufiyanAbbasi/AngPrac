import { Component } from '@angular/core';
import { ItemComponent } from "../item/item.component";

@Component({
    selector: 'app-item-list',
    standalone: true,
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.css',
    imports: [ItemComponent]
})
export class ItemListComponent {
 items:any[] = new Array(2);
}
