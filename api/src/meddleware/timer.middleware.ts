import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TimerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const logger = new Logger('Timer');
    const duration = (start: [number, number]) => {
      const finish = process.hrtime(start);
      return { seconds: finish[0], milliseconds: String(Math.floor(finish[1] / (1000 * 1000))).padStart(3, '0') };
    };

    const start = process.hrtime();
    logger.log(`${req.method} ${req.originalUrl} [STARTED ${start[1]}]`);

    let finished = false;
    res.on('finish', () => {
      finished = true;
      const finish = duration(start);
      logger.log(
        `${req.method} ${req.originalUrl} [FINISHED ${start[1]}] on ${finish.seconds}s ${finish.milliseconds}ms`,
      );
    });

    res.on('close', () => {
      if (!finished) {
        const finish = duration(start);
        logger.log(
          `${req.method} ${req.originalUrl} [CLOSED ${start[1]}] on ${finish.seconds}s ${finish.milliseconds}ms`,
        );
      }
    });

    next();
  }
}
