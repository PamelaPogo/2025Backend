import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {users} from './users.entity'
import { Product } from 'src/products/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature ([users])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Exportamos el servicio para que pueda ser utilizado en otros módulos
})
export class UsersModule {}
