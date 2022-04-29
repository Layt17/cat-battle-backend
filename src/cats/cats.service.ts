import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatDto } from './dto/cat.dto';
import { Cat } from './entity/cat.entity';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private catsRepository: Repository<Cat> ,
    ) {}

    async findAll(): Promise<Cat[]> {
        const resp = this.catsRepository.find();

        return resp;
    }

    async findOne(id: string): Promise<Cat> {
        const resp = this.catsRepository.findOne(Number(id));

        return resp;
    }

    async create(catDto: CatDto): Promise<Cat> {
        const resp = this.catsRepository.save(catDto);

        return resp;
    }

    async update(id: string, catDto: CatDto): Promise<Cat> {
        const cat = await this.catsRepository.findOne(Number(id));
        cat.name = catDto.name || cat.name;
        cat.color = catDto.color || cat.color;
        const resp = this.catsRepository.save(cat);

        return resp;
    }

    async remove(id: string) {
        const resp = this.catsRepository.delete(id);

        return resp;
    }
}
