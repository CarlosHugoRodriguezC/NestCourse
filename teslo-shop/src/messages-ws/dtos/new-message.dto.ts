import { IsOptional, IsString, MinLength } from 'class-validator';

export class NewMessageDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  id?: string;

  @IsString()
  @MinLength(1)
  message: string;
}
