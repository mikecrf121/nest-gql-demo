import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreateDoctorInput {
  @Field()
  name: string;

  @Field()
  networkProviderId: number;

  @Field({ nullable: true })
  type?: string;
}
