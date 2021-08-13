export interface IUpdateTaskDTO {
  status_task: StatusTask;
}

export enum StatusTask {
  PENDING  = "pending",
  PROGRESS = "progress",
  DONE     = "done"
}
