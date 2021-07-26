import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot('mongodb+srv://irenehl:dihlDIHL1092@cluster0.t99h1.mongodb.net/Nest-API?retryWrites=true&w=majority'
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
