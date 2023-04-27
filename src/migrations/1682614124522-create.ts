import { MigrationInterface, QueryRunner } from "typeorm";

export class create1682614124522 implements MigrationInterface {
    name = 'create1682614124522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_554d853741f2083faaa5794d2ae"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_554d853741f2083faaa5794d2a"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_554d853741f2083faaa5794d2ae" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_554d853741f2083faaa5794d2ae"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_554d853741f2083faaa5794d2a" UNIQUE ("departmentId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_554d853741f2083faaa5794d2ae" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
