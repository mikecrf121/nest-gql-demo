import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Doctor } from 'src/doctors/doctor.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
@Entity()
@ObjectType()
export class NetworkProvider {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Doctor, (doctor) => doctor.networkProvider)
  @Field((type) => Doctor, { nullable: true })
  doctors?: Doctor[];
}
