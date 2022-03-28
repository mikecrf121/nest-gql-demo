import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNetworkProviderInput {
  @Field()
  name: string;
}
