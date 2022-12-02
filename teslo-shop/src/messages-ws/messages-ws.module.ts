import { Module } from '@nestjs/common';
import { MessagesWsService } from './messages-ws.service';
import { MessagesWsGateway } from './messages-ws.gateway';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [MessagesWsGateway, MessagesWsService]
})
export class MessagesWsModule {}