import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({
    description: 'Product Title',
    uniqueItems: true,
    nullable: false,
    minLength: 1,
  })
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  price?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  slug?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  stock?: number;

  @IsString({ each: true })
  @IsArray()
  @ApiProperty()
  sizes: string[];

  @IsString()
  @IsIn(['men', 'women', 'kid', 'unisex'])
  @ApiProperty()
  gender: string;

  @IsString({ each: true })
  @IsArray()
  @ApiProperty()
  tags: string[];

  @IsString({ each: true })
  @IsArray()
  @ApiProperty()
  images: string[];
}
