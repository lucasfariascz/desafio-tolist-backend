export interface ICreateTaskDTO {
  description: string;
  person_in_change: string;
  email: string;
  status_task?: StatusTask;
}

export enum StatusTask {
  PENDING  = "pending",
  PROGRESS = "progress",
  DONE     = "done"
}
