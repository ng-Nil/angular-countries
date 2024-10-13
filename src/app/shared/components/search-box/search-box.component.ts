import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
    selector: 'shared-search-box',
    templateUrl: 'search-box.component.html'
})

export class ShearchBoxComponent implements OnInit, OnDestroy{

    private debouncer: Subject<string> = new Subject<string>();
    private debouncerSuscription?: Subscription;

    @Input()
    public initialValue: string = '';

    @Input()
    public placeholder: string = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    @Output()
    public onDebounce = new EventEmitter<string>();

    ngOnInit(): void {
        this.debouncerSuscription = this.debouncer
        .pipe(
            debounceTime(300)
        )
        .subscribe( value => {
            this.onDebounce.emit( value );
        });
    }

    ngOnDestroy(): void {
        this.debouncerSuscription?.unsubscribe();
    }

    onKeyPress( searchTerm: string ) {
  this.debouncer.next( searchTerm );      
    }

    //......................................
    //con el segundo metodo esto no es necesario
    // @ViewChild('txtSearchInput')
    // public searchInput!: ElementRef<HTMLInputElement>;
    
    // search(): void {
    //     const newSearch = this.searchInput.nativeElement.value;
    //     this.onValue.emit(newSearch)

    // }

    // search( value: string): void {
    // 
    //     this.onValue.emit( value )

    // }
}
