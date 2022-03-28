import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsResolver } from './doctors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './doctor.entity';
import { NetworkProvidersModule } from 'src/network-providers/network-providers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor]), NetworkProvidersModule],
  providers: [DoctorsService, DoctorsResolver],
})
export class DoctorsModule {}
