import { Test, TestingModule } from '@nestjs/testing';
import { NetworkProvidersResolver } from './network-providers.resolver';
import { NetworkProvidersService } from './network-providers.service';

describe('NetworkProvidersResolver', () => {
  let resolver: NetworkProvidersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkProvidersResolver, NetworkProvidersService],
    }).compile();

    resolver = module.get<NetworkProvidersResolver>(NetworkProvidersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
