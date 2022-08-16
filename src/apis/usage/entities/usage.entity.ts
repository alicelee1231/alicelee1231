import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usage {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  area: string;

  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  createdAt: string;
}
