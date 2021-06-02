//  Copyright (c) 2021 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

class GraphdocPluginErase {
  constructor(schema, graphdocConfig) {
    const config = graphdocConfig['graphdoc-plugin-erase'] || {}
    const eraseByNameRegex = config.eraseByNameRegex ? new RegExp(config.eraseByNameRegex) : /^__/
    const eraseByDescriptionRegex = config.eraseByDescriptionRegex ? new RegExp(config.eraseByDescriptionRegex) : /^$/
    const eraseByKindRegex = config.eraseByKindRegex ? new RegExp(config.eraseByKindRegex) : /^$/
    schema.types = schema.types.filter(type =>
      !eraseByNameRegex.test(type.name) && !eraseByDescriptionRegex.test(type.description) && !eraseByKindRegex.test(type.kind)
    )
  }
}

module.exports.default = GraphdocPluginErase
