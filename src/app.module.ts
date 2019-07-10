import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

// i6OHTPTXaHmbm0Du
@Module({
  imports: [ProductsModule, MongooseModule.forRoot(
    'mongodb+srv://ved:i6OHTPTXaHmbm0Du@cluster0-8yip1.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
  ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
