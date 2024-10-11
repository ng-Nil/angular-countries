import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: 'search-box.component.html'
})

export class ShearchBoxComponent{

    //con el segundo metodo esto no es necesario
    @ViewChild('txtSearchInput')
    public searchInput!: ElementRef<HTMLInputElement>;
    //....................

    @Input()
    public placeholder: string = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    search(): void {
        const newSearch = this.searchInput.nativeElement.value;
        this.onValue.emit(newSearch)

    }

    // search( value: string): void {
    // 
    //     this.onValue.emit( value )

    // }
}
