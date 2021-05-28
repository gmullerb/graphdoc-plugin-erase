//  Copyright (c) 2021 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

class GraphdocPluginErase {
  constructor(schema, projectPackage) {
    const config = projectPackage['graphdoc-plugin-erase'] || {}
    const eraseByNameRegex = config.eraseByNameRegex ? new RegExp(config.eraseByNameRegex) : /^__/
    const eraseByKindRegex = config.eraseByKindRegex ? new RegExp(config.eraseByKindRegex) : /^$/
    schema.types = schema.types.filter(type => !eraseByNameRegex.test(type.name) && !eraseByKindRegex.test(type.kind))
  }
}

module.exports.default = GraphdocPluginErase
