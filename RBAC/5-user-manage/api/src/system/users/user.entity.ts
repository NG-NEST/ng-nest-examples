import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('system_user')
export class User {
  /**
   * 编码
   */
  @PrimaryColumn('uuid', { length: 36 })
  id: string;

  /**
   * 名称
   */
  @Column({ length: 36 })
  name: string;

  /**
   * 账号
   */
  @Column()
  account: string;

  /**
   * 邮箱
   */
  @Column()
  email: string;

  /**
   * 手机号
   */
  @Column()
  phone: string;
}
