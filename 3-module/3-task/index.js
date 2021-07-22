function camelize(str) {
  return str
    .split('-')
    .map((text, index) => {
      return index ? text[0].toUpperCase() + text.slice(1) : text;
    })
    .join('');
}