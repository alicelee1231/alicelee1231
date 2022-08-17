import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usage {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  userId: string;

  @Column()
  area: string;

  @Column()
  content: string;

  @Column()
  createdAt: string;

  @Column()
  sort: string;

  @Column()
  period: string;

  @Column()
  goal: string;
}
