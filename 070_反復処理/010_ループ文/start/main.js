function* genStep({min = 0, max = 20, step = 1}) {
  for(let i = min; i <= max; i += step) {
    yield i;
  }
}
