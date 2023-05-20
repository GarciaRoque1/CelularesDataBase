import {personas} from './mostrar/personas'
import {precios} from './mostrar/precios'
import {modelos} from './mostrar/modelos'
import {celulares} from './mostrar/celulares'
import {celularespersonas} from './mostrar/celularespersonas'
import {addpersonas} from './aniadir/personas'
import {addmodelos} from './aniadir/modelos'
import {addprecios} from './aniadir/precios'
import {addcelulares} from './aniadir/celulares'
import {addcelularespersonas} from './aniadir/celularespersonas'
import {delpersonas} from './borrar/personas'
import {delmodelos} from './borrar/modelos'
import {delprecios} from './borrar/precios'
import {delcelulares} from './borrar/celulares'
import {delcelularespersonas} from './borrar/celularespersonas'
import {updpersonas} from './actualizar/personas'
import {updmodelos} from './actualizar/modelos'
import {updprecios} from './actualizar/precios'
import {updcelulares} from './actualizar/celulares'
import {updcelularespersonas} from './actualizar/celularespersonas'

export const resolvers = {
  Query: {
    personas,
    precios,
    modelos,
    celulares,
    celularespersonas,
  },

  Mutation:{
    addpersonas,
    addmodelos,
    addprecios,
    addcelulares,
    addcelularespersonas,

    delpersonas,
    delmodelos,
    delprecios,
    delcelulares,
    delcelularespersonas,
    
    updpersonas,
    updmodelos,
    updprecios,
    updcelulares,
    updcelularespersonas
  }
};
