import { Module } from '@nestjs/common';
import { GrowthModule } from './growth/growth.module';

@Module({
  imports: [GrowthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
