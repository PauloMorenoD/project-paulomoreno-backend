import { MigrationInterface, QueryRunner } from "typeorm";

export class changeUserTable1680128386200 implements MigrationInterface {
    name = 'changeUserTable1680128386200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_admin" DROP DEFAULT`);
    }

}
