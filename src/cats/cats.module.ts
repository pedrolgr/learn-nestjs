import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [],
})
export class CatsModule {}
