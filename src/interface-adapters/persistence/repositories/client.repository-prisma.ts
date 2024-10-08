import { Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/domain/repositories/client.repository';
import { Client } from 'src/domain/entities/client.entity';
import { prisma } from 'src/interface-adapters/persistence/database/prisma';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor() {}

  async findAll(): Promise<Client[]> {
    const clients = await prisma.cliente.findMany();
    return clients;
  }

  async findById(id: Client['codigo']): Promise<Client> {
    return await prisma.cliente.findFirst({
      where: {
        codigo: id,
      },
    });
  }
}
