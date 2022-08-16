import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn('increment')
  id: string;
}
