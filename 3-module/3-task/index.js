function camelize(str) {
  return str
    .split('-')
    .map((text, index) => {
      if (index !== 0) {
        return text = text[0].toUpperCase() + text.slice(1);
      }
    })
    .join('');
}
