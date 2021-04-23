import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

/**
 * id 属性
 */
export class XId {
  @ApiProperty({name: 'id'})
  id: XIdType;
}

/**
 * id 类型
 */
export type XIdType = string | number | Date | ObjectID;
