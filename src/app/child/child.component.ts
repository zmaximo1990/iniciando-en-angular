import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @HostBinding('class.primary') public isPrimary = false;

  // El hijo esta recibiendo el valor desde el padre
  @Input() public text: string;

  // Le estamos mandando un string desde el hijo al padre
  @Output() public emitProperty: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  // Detectamos los cambios de los datos de entrada
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    setTimeout(() => {
      this.isPrimary = true;
    }, 2000);
  }

  @HostListener('mouseover', ['$event'])
  public onHover($event) {
    console.log($event);
  }

  // Funcion del hijo que se ejecuta al hacer click en el boton
  // Se encarga de emitir un string 'Soy tu hijo'
  public emitEvent() {
    this.emitProperty.emit('Soy tu hijo');
  }

  // Metodo que los ejuta el componente padre
  // Tambien se puede invocar dentro de eeste mismo componente
  public run() {
    alert('Mi padre me dijo que me ejecute');
  }
}
