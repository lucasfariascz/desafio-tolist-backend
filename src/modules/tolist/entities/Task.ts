import { v4 as uuidV4} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

enum StatusTask {
  PENDING  = "pending",
  PROGRESS = "progress",
  DONE     = "done"
}

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

  @Column({ type: "enum", enum: StatusTask, default: StatusTask.PENDING})
  status_task: StatusTask;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
