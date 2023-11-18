javascriptGenerator['marty_leds_specific_led'] = function (block) {
  var LEDAddon = block.getFieldValue('LEDADDON')
  var ledId = block.getFieldValue('LEDID')
  var colour = block.getFieldValue('COLOUR')
  const code = `await makerKit.hw.run(routineContext, "marty.leds_specific_led", "${LEDAddon}", "${ledId}", "${colour}");\n`
  return code
}
