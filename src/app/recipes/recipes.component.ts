import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [],
  // providers: [RecipeService], //service can be used just in recipe-components !!!
})
export class RecipesComponent {
  constructor() {}

  ngOnInit() {}
}
