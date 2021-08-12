import { v4 as uuidV4} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("tasks")
class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  person_in_change: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
