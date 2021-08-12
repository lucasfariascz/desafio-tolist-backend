import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTasks1628743791159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
          name: "tasks",
          columns: [
            {
              name: "id",
              type: "uuid"
            },
            {
              name: "description",
              type: "varchar"
            },
            {
              name: "person_in_change",
              type: "varchar"
            },
            {
              name: "email",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("tasks");
    }

}
