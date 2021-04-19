import {
  Column,
  CreateDateColumn,
  Entity, PrimaryColumn,
} from 'typeorm';

import { v4 as uuid
 } from "uuid";

@Entity('cars')
export class Cars {

  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  license_plate: string;

  @Column()
  amount: Number;

  @Column()
  color : string;

  @CreateDateColumn()
  created_at: Date;
  
  constructor() {
    if(!this.id) {
      this.id= uuid();
    }
    this.created_at = new Date()
  }
}