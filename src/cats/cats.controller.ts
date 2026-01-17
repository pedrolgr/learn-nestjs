import { Controller, Get, Req, Res } from '@nestjs/common'
import type { Request, Response } from 'express';

@Controller('cats')
export class CatController {

    @Get()
    findAll(@Req() req: Request): string {
        console.log(req)
        return 'All cats here';
    }

    @Get('names')
    getNames(@Res() res:Response) {
        res.send('Here is cats names')
    }

    
}