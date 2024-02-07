import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'tc-selector',
    template: `
        <div class="card-container">
            <button *ngFor="let item of items" (click)="itemSelected.emit(item)" class="card card-small" tabindex="0">
                <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span> {{ key ? item[key] : item }} </span>
            </button>
        </div>
    `,
    styleUrls: ['./selector.component.scss']
})
export class SelectorComponent<T, K extends keyof T> {

    @Input({
        required: true
    })
    items!: T[]

    @Input()
    key?: K

    @Output()
    itemSelected: EventEmitter<T> = new EventEmitter()

}