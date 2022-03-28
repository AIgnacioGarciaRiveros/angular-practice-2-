import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 // selectedHero: Hero = {
   // id: 4,
    //name: 'carlos',
 // };
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  selectedHero?:Hero;

 heroes=HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
