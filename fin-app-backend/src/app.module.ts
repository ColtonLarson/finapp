import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FinGroupsController } from './controllers/fin-groups/fin-groups.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    FinGroupsController,
  ],
  providers: [AppService],
})
export class AppModule {}
