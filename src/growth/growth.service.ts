import { Injectable } from '@nestjs/common';
import { CreateGrowthDto } from './dto/create-growth.dto';
import { UpdateGrowthDto } from './dto/update-growth.dto';
import { growth } from '../constants/growth';

@Injectable()
export class GrowthService {
  findAll() {
    return growth;
  }

  // The services below are not currently used, but we're keeping them in case we need them in the future.

  create(createGrowthDto: CreateGrowthDto) {
    return 'This action adds a new growth';
  }

  findOne(id: number) {
    return `This action returns a #${id} growth`;
  }

  update(id: number, updateGrowthDto: UpdateGrowthDto) {
    return `This action updates a #${id} growth`;
  }

  remove(id: number) {
    return `This action removes a #${id} growth`;
  }
}
