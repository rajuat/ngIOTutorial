import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ] 
})

export class HeroesComponent implements OnInit { 
  
  heroes: Hero[];
  selectedHero : Hero;

  constructor( private heroService: HeroService, private router:Router) {    
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

export class Hero {
  id: number;
  name: string;
}