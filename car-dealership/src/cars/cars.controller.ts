import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const car = this.carsService.getCarById(id);
    return car;
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
