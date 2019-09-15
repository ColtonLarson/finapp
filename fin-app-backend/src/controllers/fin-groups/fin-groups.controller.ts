import { Controller, Get, Post, Header, Body, Param } from '@nestjs/common';

@Controller('groups')
export class FinGroupsController {
  groups: string[] = ['income', 'expenses', 'food', 'utilities', 'debt'];

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  findAll(): string[] {
    return this.groups;
  }

  @Post()
  save(@Param('group') group: string): string {
    this.groups.push(group);
    return group;
  }
}
