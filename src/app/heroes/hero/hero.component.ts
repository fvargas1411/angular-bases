import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name :string = 'ironman';
  public age:  number = 45

  get capitalizesName(): string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age} `;
  }

  public ChangeHero(): void{
    this.name = 'Frank';
  }

  public ChangeAge(): void{
    this.age = 44;
  }

  public resetForm():void{
    this.name = 'iroman';
    this.age = 45;
  }

}
