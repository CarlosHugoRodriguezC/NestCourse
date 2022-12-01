import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  @ApiProperty({ default: 10, description: 'How many rows do you need' })
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ default: 0, description: "Hom many rows do you want to skip" })
  offset?: number;
}
