import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    
  constructor( 
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,        
    ){}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
  async findOne(id: number): Promise<Product> { 
    const product = await this.productsRepository.findOne({
      where: { id },  
    });

    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product; 
  }
  create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }
  delete(id: number): Promise<void> {
    return this.productsRepository.delete(id).then(() => {});
  }
  update(id: number, product: Partial<Product>): Promise<Product> {
    return this.productsRepository.save({ ...product, id });  
  }
  updatePartial(id: number, product: Partial<Product>): Promise<Product> {  
    return this.productsRepository.save({ ...product, id }); 
  }
 }
 