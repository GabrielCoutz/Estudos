import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInput } from './create-product.dto';

export class UpdateProductInput extends PartialType(CreateProductInput) {}
