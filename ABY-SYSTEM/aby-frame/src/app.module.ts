import { Module } from '@nestjs/common';
import { FrameModule } from './frame/frame.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FrameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
