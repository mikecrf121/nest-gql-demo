import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NetworkProvider } from 'src/network-providers/entities/network-provider.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Doctor {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field()
  networkProviderId: number;

  @ManyToOne(
    () => NetworkProvider,
    (networkProvider) => networkProvider.doctors,
  )
  @Field((type) => NetworkProvider)
  networkProvider: NetworkProvider;
}
