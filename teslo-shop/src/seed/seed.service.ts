import { Inject, Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  @Inject(ProductsService)
  private readonly productsService: ProductsService;

  async runSeed() {
    await this.insertNewProducts();
    return 'Seed executed';
  }

  async insertNewProducts() {
    this.productsService.deleteAllProducts();
    const products = initialData.products;

    const insertPromises = [];

    products.forEach((product) =>
      insertPromises.push(this.productsService.create(product)),
    );

    await Promise.all(insertPromises);

    return true;
  }
}
