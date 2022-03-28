import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NetworkProvidersService } from './network-providers.service';
import { NetworkProvider } from './entities/network-provider.entity';
import { CreateNetworkProviderInput } from './dto/create-network-provider.input';

@Resolver(() => NetworkProvider)
export class NetworkProvidersResolver {
  constructor(
    private readonly networkProvidersService: NetworkProvidersService,
  ) {}

  @Mutation(() => NetworkProvider)
  createNetworkProvider(
    @Args('createNetworkProviderInput')
    createNetworkProviderInput: CreateNetworkProviderInput,
  ) {
    return this.networkProvidersService.create(createNetworkProviderInput);
  }

  @Query(() => [NetworkProvider], { name: 'networkProviders' })
  findAll() {
    return this.networkProvidersService.findAll();
  }

  @Query(() => NetworkProvider, { name: 'networkProvider' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.networkProvidersService.findOne(id);
  }

  // @Mutation(() => NetworkProvider)
  // updateNetworkProvider(
  //   @Args('updateNetworkProviderInput')
  //   updateNetworkProviderInput: UpdateNetworkProviderInput,
  // ) {
  //   return this.networkProvidersService.update(
  //     updateNetworkProviderInput.id,
  //     updateNetworkProviderInput,
  //   );
  // }

  // @Mutation(() => NetworkProvider)
  // removeNetworkProvider(@Args('id', { type: () => Int }) id: number) {
  //   return this.networkProvidersService.remove(id);
  // }
}
