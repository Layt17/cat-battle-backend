import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getAll() {
        return this.catsService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.catsService.findOne(id);
    }

    @Post('create')
    create(@Body() catDto: CatDto) {
        return this.catsService.create(catDto);
    }

    @Put('update/:id')
    update(@Param('id') id: string, @Body() catDto: CatDto) {
        return this.catsService.update(id, catDto);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string) {
        return this.catsService.remove(id);
    }
}
