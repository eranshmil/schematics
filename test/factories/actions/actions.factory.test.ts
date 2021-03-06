import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { ActionsSchema } from '../../../src/factories/actions/actions.schema';
import { FACTORIES } from '../../../src/utils';

describe('NGXS Actions', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner('.', path.join(process.cwd(), 'src/collection.json'));
  it('should manage name only', () => {
    const options: ActionsSchema = {
      name: 'todos'
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.ACTIONS, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/todos/todos.actions.ts']);
  });
});
