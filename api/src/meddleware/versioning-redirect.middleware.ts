import { INestApplication } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

let version: string;
let availableRoutes: [];

export class VersioningRedirectMiddleware {
  constructor(redirectVersion: string, app: INestApplication) {
    version = redirectVersion;
    const server = app.getHttpServer();
    const router = server._events.request._router;
    availableRoutes = router.stack
      .map((layer) => {
        if (layer.route) {
          return {
            route: {
              path: layer.route?.path,
              method: layer.route?.stack[0].method,
            },
          };
        }
      })
      .filter((item) => item !== undefined);
  }

  use(req: Request, res: Response, next: NextFunction) {
    let changeURL = false;
    const splitURL = req.url.split('/');
    if (splitURL[1].startsWith('v')) {
      const versionNumber = splitURL[1].replace(/\D/g, '');
      if (!versionNumber) {
        changeURL = true;
      }
    } else {
      changeURL = true;
    }
    if (changeURL) req.url = `/v${version + req.url}`;
    next();
  }
}
