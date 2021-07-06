function camelize(str) {
  return str
    .split('-')
    .map((text, index) => {
      if (index !== 0) {
        text = text[0].toUpperCase() + text.slice(1);
      }
      return text;
    })
    .join('');
}
