import { Controller, HttpStatus, Post, Res, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';

@Controller('product')
export class ProductController {
    @Post('/create')
    createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {     
        return res.status(HttpStatus.OK).json({
            message: 'ok'
        })
    }
}