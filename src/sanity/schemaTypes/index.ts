import { type SchemaTypeDefinition } from 'sanity'

import { newsType } from './news';
import { residentialComplex } from './building';
import { district } from './district';
import { housingType } from './housingType';
import { rooms } from './rooms';
import { completionTime } from './completionTime';

import { floorFilter } from './floorFilter';
import { roomsFilterLayouts } from './roomsFilterLayouts';
import { layouts } from './Layouts';

import { conditions } from './conditions';


// import { infrastructure } from './infrastructure';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [district, housingType, rooms, newsType, residentialComplex, completionTime,
    floorFilter, roomsFilterLayouts, layouts, conditions],
}
