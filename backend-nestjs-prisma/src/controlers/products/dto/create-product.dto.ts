import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  ownerId: string;
}
