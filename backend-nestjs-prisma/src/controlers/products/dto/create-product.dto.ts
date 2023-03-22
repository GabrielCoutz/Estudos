import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductInput {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
