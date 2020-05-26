import { Injectable, NestMiddleware, Logger} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    Logger.verbose(`Request from: ${req.ip}`)
    next();
  }
}
