import { Request } from 'express';
import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  const fileExtencion = file.originalname.split('.').at(-1);

  const fileName = `${uuid()}.${fileExtencion}`;

  callback(null, fileName);
};
