import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNetworkProviderInput } from './dto/create-network-provider.input';
import { NetworkProvider } from './entities/network-provider.entity';

@Injectable()
export class NetworkProvidersService {
  constructor(
    @InjectRepository(NetworkProvider)
    private networkProviderRepository: Repository<NetworkProvider>,
  ) {}
  create(createNetworkProviderInput: CreateNetworkProviderInput) {
    const newNetworkProvider = this.networkProviderRepository.create(
      createNetworkProviderInput,
    );
    return this.networkProviderRepository.save(newNetworkProvider);
  }
  findAll() {
    return this.networkProviderRepository.find();
  }
  findOne(id: number) {
    return this.networkProviderRepository.findOneOrFail(id);
  }
}
