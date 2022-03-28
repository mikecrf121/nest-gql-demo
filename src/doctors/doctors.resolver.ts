import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { NetworkProvider } from 'src/network-providers/entities/network-provider.entity';
import { Doctor } from './doctor.entity';
import { DoctorsService } from './doctors.service';
import { CreateDoctorInput } from './dto/create-doctor.input';

@Resolver((of) => Doctor)
export class DoctorsResolver {
  constructor(private doctorsService: DoctorsService) {}

  @Query((returns) => [Doctor])
  doctors(): Promise<Doctor[]> {
    return this.doctorsService.findAll();
  }

  @Mutation((returns) => Doctor)
  createDoctor(
    @Args('createDoctorInput') createDoctorInput: CreateDoctorInput,
  ): Promise<Doctor> {
    return this.doctorsService.createDoctor(createDoctorInput);
  }

  @ResolveField((returns) => NetworkProvider)
  networkProvider(@Parent() doctor: Doctor): Promise<NetworkProvider> {
    return this.doctorsService.findNetworkProvider(doctor.networkProviderId);
  }
}
