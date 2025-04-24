import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {ProductsService} from '../products/products.service';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll():Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id') 
         async findOne(@Param('id') id: number): Promise<Product> { 
           return this.productsService.findOne(id);
         }
    
    @Post()
    createProduct (@Body() product: Product): Promise<Product> {
        return this.productsService.create(product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number): Promise<void> {
        return this.productsService.delete(id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() product: Partial<Product>): Promise<Product> {
        return this.productsService.update(id, product); 
    }

    @Patch(':id')
    async partialUpdateProduct(@Param('id') id: number, @Body() product: Partial<Product>): Promise<Product> {
        return this.productsService.update(id, product); 
    }
}