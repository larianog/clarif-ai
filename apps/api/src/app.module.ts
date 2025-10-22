import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';
import { UploadModule } from './upload/upload.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';

@Module({
  imports: [AuthModule, UserModule, ChatModule, UploadModule],
  controllers: [AppController, ChatController, UploadController],
  providers: [AppService, PrismaService, ChatService, UploadService],
})
export class AppModule {}
