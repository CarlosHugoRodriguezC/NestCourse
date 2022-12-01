import { Controller, Get } from '@nestjs/common';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';
import { SeedService } from './seed.service';
import { User } from '../auth/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  

  // @Auth(ValidRoles.admin)
  @Get()
  executeSeed() {
    return this.seedService.runSeed();
  }

}
