import { IsNotEmpty, IsString, IsNumber, Min, IsInt } from 'class-validator';
import { Size } from 'src/size/size.entity';
import { users } from 'src/users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    @IsNumber()
    @Min(0) // Aseguramos que el precio no sea negativo
    price: number;

    @Column()
    @IsInt()
    @Min(0) // Aseguramos que el stock no sea negativo
    stock: number;

    @ManyToOne (() => users, (user) => user.products)
    user: users; // Relación con el usuario que creó el producto

    // Relación de muchos a muchos con Size
    @ManyToMany(() => Size)
    @JoinTable()  // Especifica que esta entidad manejará la relación en una tabla intermedia
    sizes: Size[];
}