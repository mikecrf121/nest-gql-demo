import { Module } from '@nestjs/common';
import { NetworkProvidersService } from './network-providers.service';
import { NetworkProvidersResolver } from './network-providers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworkProvider } from './entities/network-provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NetworkProvider])],
  providers: [NetworkProvidersResolver, NetworkProvidersService],
  exports: [NetworkProvidersService],
})
export class NetworkProvidersModule {}
