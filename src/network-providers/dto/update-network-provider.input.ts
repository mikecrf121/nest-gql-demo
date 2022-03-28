import { CreateNetworkProviderInput } from './create-network-provider.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNetworkProviderInput extends PartialType(CreateNetworkProviderInput) {
  @Field(() => Int)
  id: number;
}
