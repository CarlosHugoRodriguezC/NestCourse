import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonResponse } from './interfaces/pokemon-response.interface';

@Injectable()
export class SeedService {
  private readonly url: string = 'https://beta.pokeapi.co/graphql/v1beta';
  private readonly headers: any = {
    accept: '*/*',
    'content-type': 'application/json',
    Referer: 'https://beta.pokeapi.co/graphql/console/',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  private readonly body: string =
    '{"query":"query samplePokeAPIquery {\\n  pokemon_v2_pokemon(limit: 650){\\n    id\\n    name\\n  }\\n}\\n","variables":null,"operationName":"samplePokeAPIquery"}';

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    // const data = await this.fetchData();

    const response = await this.http.post<PokemonResponse>(
      this.url,
      this.body,
      {
        headers: this.headers,
      },
    );

    const { data } = response;
    const { pokemon_v2_pokemon: results } = data;
    await this.pokemonModel.deleteMany();
    const result = await this.pokemonModel.insertMany(
      results.map(({ id: no, name }) => ({ no, name })),
    );

    return result;
  }

  // private async fetchData() {
  //   const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
  //     headers: {
  //       accept: '*/*',
  //       'accept-language': 'es-419,es;q=0.9,en;q=0.8',
  //       'content-type': 'application/json',
  //       'sec-ch-ua':
  //         '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
  //       'sec-ch-ua-mobile': '?0',
  //       'sec-ch-ua-platform': '"Windows"',
  //       'sec-fetch-dest': 'empty',
  //       'sec-fetch-mode': 'cors',
  //       'sec-fetch-site': 'same-origin',
  //       'x-method-used': 'graphiql',
  //       Referer: 'https://beta.pokeapi.co/graphql/console/',
  //       'Referrer-Policy': 'strict-origin-when-cross-origin',
  //     },
  //     body: '{"query":"query samplePokeAPIquery {\\n  pokemon_v2_pokemon(limit: 650){\\n    id\\n    name\\n  }\\n}\\n","variables":null,"operationName":"samplePokeAPIquery"}',
  //     method: 'POST',
  //   });
  //   return response.json();
  // }
}
