// import { Component } from "@angular/core";




// @Component(
//   selector: "app-property-card",
//   template: "<h1>I am a Card</h1>"
// )
// export class PropertyCardComponent{

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
 // template: '<h1>I am a Card</h1>',
 templateUrl: 'Property-Card.component.html',

  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ['Property-card.component.css']
})
export class PropertyCardComponent {
  Property: any={
    "Id":1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  }
}
