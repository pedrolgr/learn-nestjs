import { Controller, Get } from '@nestjs/common'

@Controller('cats')
export class CatController {

    @Get()
    findAll(): string {
        return 'Returnin all cats';
    }

    @Get('names')
    getNames(): string {
        return 'Returnin cats names';
    }
}