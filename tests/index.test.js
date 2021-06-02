//  Copyright (c) 2021 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
const GraphdocPluginErase = require('../lib/index')

it('should erase with default options', function() {
  const schema = {
    types: [{
      name: 'op1',
      description: 'op1Desc',
      kind: 'SCALAR'
    }, {
      name: '__op2',
      description: 'op2Desc'
    }, {
      name: 'op3',
      description: 'op3Desc',
      kind: 'OBJECT'
    }, {
      name: 'op4',
      description: 'op4Desc @RemoveFromDocumentation',
      kind: 'OBJECT'
    }]
  }

  new GraphdocPluginErase.default(schema, {}, {})

  expect(schema.types).toHaveLength(3)
  expect(schema.types.map(type => type.name)).toEqual(expect.arrayContaining(['op1', 'op3', 'op4']))
})

it('should erase with new options', function() {
  const schema = {
    types: [{
      name: 'op1',
      description: 'op1Desc',
      kind: 'SCALAR'
    }, {
      name: '__op2',
      description: 'op2Desc'
    }, {
      name: 'op3',
      description: 'op3Desc',
      kind: 'OBJECT'
    }, {
      name: 'op4',
      description: 'op4Desc @RemoveFromDocumentation',
      kind: 'OBJECT'
    }]
  }

  new GraphdocPluginErase.default(schema, {
      'graphdoc-plugin-erase': {
        eraseByNameRegex: '_o',
        eraseByDescriptionRegex: "@RemoveFromDocumentation",
        eraseByKindRegex: 'SCALAR'
      }
    }, {})

  expect(schema.types).toHaveLength(1)
  expect(schema.types.map(type => type.name)).toEqual(expect.arrayContaining(['op3']))
})
