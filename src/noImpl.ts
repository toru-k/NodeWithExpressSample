import * as Express from 'express';

// エラーを返却するだけのダミー
export default function noImplemented(
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
) {
    res.status(501).json({ message: 'Not Implemented.' });
}
