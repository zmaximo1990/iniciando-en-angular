import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ude y Qwerty';
  forChild = 'Soy tu padre';

  // Estamos linkeando el componente desde el padre
  @ViewChild(ChildComponent) child: ChildComponent;

  constructor(){}

  ngOnInit() {
    setTimeout(() => {
      // Luego de 2 segundos, cambiamos el valor de la propiedad que le estamos pasando a nuestro hijo
      this.forChild = 'Cambie el valor';
    }, 2000);
  }

  public react($event) {
    alert($event);
  }

  public doOnChild() {
    this.child.run();
  }

}
