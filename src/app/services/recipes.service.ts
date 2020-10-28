import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesUrl='http://localhost:3000'
  constructor( private httpClient:HttpClient) { }

  getAllRecipes(){
    return this.httpClient.get<{ message:string, recipes:any}>(`${this.recipesUrl}/allRcipes`)
  }

  getByIdRecipes(id:number){
    return this.httpClient.get<{message:string,recipes:any}>(`${this.recipesUrl}/allRecipe ${id}`)
  }

  deleteRecipe(id:number){
    return this.httpClient.delete(`${this.recipesUrl}/deleteRecipe/${id}`)
  }
  addrecipe(recipe:any){
    return this.httpClient.post(`${this.recipesUrl}/addRecipe`,recipe);
  }

  editMenu(recipe:any){
    return this.httpClient.put<{message:string}>(`${this.recipesUrl}/editRecipe/${recipe.id}`,recipe)
  }

}
