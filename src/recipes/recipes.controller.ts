/* eslint-disable prettier/prettier */
import { Controller,Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import {RecipesService} from './recipes.service';
import { JwtAuthGuard } from 'src/auth/JWT/jwt-auth.guard';

export default interface IRecipe{
    id : number,
    name : string,
    image : string,
    description : string,
    ingredients : Array<string>,
    steps : Array<string>,
    categorie : string
}

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService:RecipesService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllRecipes():Promise<IRecipe[]>{
        return this.recipesService.getAllRecipes();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getRecipeById(@Param('id',new ParseIntPipe()) id:number) : Promise<IRecipe>{
        return this.recipesService.getRecipeById(id);
    }

    // @Get(':name')
    // getRecipeByName(@Param('name') name:string) : IRecipe{
    //     return this.recipesService.getRecipeByName(name);
    // }

}
