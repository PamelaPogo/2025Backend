// Este archivo es probablemente products.module.ts
import { Module } from '@nestjs/common';
import {ProductsController} from './products.controller';
import {ProductsService} from './products.service';
import { Product } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { users } from 'src/users/users.entity'; 
// import { UsersModule } from 'src/users/users.module'; 

@Module({
    // Correcto: Esto hace que Repository<Product> esté disponible para inyección DENTRO de este módulo.
imports: [TypeOrmModule.forFeature ([Product])],
controllers: [ProductsController],
providers: [ProductsService] // Correcto: El servicio está declarado como proveedor aquí.
})
export class ProductsModule {}