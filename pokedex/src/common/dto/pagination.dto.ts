import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginatioDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit: number;
}
