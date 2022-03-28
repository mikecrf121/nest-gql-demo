import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NetworkProvider } from 'src/network-providers/entities/network-provider.entity';
import { NetworkProvidersService } from 'src/network-providers/network-providers.service';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { CreateDoctorInput } from './dto/create-doctor.input';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor) private doctorsRepository: Repository<Doctor>,
    private networkProviderService: NetworkProvidersService,
  ) {}

  async createDoctor(createDoctorInput: CreateDoctorInput): Promise<Doctor> {
    const newDoctor = this.doctorsRepository.create(createDoctorInput);

    return this.doctorsRepository.save(newDoctor);
  }
  async findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find(); // SELECT * From doctor
  }

  async findNetworkProvider(networkProviderId): Promise<NetworkProvider> {
    return this.networkProviderService.findOne(networkProviderId);
  }
}
