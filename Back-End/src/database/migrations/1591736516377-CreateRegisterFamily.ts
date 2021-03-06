import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegisterFamily1591736516377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registerfamily',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy:'uuid',
            default: 'uuid_generate_v4()'
          },

          {
            name: 'name_institution',
            type: 'varchar',
          },

            {
            name: 'email',
            type: 'varchar',
          },

          {
            name: 'cnpj',
            type: 'varchar',
          },

            {
            name: 'password',
            type: 'varchar',
          },
        ],
      }),
    );
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registerfamily');
  }
}
