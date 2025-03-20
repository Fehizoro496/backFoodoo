/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import IRecipe from './recipes.controller';
// eslint-disable-next-line prettier/prettier
import { join } from 'path';

import { promises as fs } from 'fs';

async function getAllRecipes(): Promise<any> {
  const path = join(__dirname, '..', '..', 'public', 'recipes.json');
  const file = JSON.parse(await fs.readFile(path, 'utf-8'));
  return file;
}

async function getRecipesById(id: number): Promise<any> {
  const path = join(__dirname, '..', '..', 'public', 'recipes.json');
  const file = JSON.parse(await fs.readFile(path, 'utf-8'));
  return file.filter((el) => el.id == id)[0];
}

@Injectable()
export class RecipesService {
  async getAllRecipes(): Promise<IRecipe[]> {
    return await getAllRecipes();
  }

  async getRecipeById(id: number): Promise<IRecipe> {
    return await getRecipesById(id);
  }

  // getRecipeByName(name: string): IRecipe {
  //     return listRecipes.filter(el=>el.name==name)[0]
  // }
}

// const recipe: (number) => IRecipe = function (id: number): IRecipe {
//   return {
//     id: id,
//     name: `recipeTest${id}`,
//     description: `recipe${id} Description`,
//     steps: ['step 1', 'step 2', 'step 3', 'step 4'],
//     ingredients: ['ing 1', 'ing 2', 'ing 3', 'ing 4'],
//     categorie: `recipe${id} categorie`,
//     image: `recipeTest${id}.jpg`,
//   };
// };

// const listRecipes: Array<IRecipe> = [recipe(1), recipe(2), recipe(3)];
