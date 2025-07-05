import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrowthService } from './growth.service';
import { CreateGrowthDto } from './dto/create-growth.dto';
import { UpdateGrowthDto } from './dto/update-growth.dto';

@Controller('growth')
export class GrowthController {
  constructor(private readonly growthService: GrowthService) {}

  @Get()
  findAll() {
    return this.growthService.findAll();
  }

  // The controllers below are not currently used, but we're keeping them in case we need them in the future.

  @Post()
  create(@Body() createGrowthDto: CreateGrowthDto) {
    return this.growthService.create(createGrowthDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.growthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrowthDto: UpdateGrowthDto) {
    return this.growthService.update(+id, updateGrowthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.growthService.remove(+id);
  }
}
