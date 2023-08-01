function cleanSet(set, startingString) {
  if (!startingString || !set || startingString.length === 0) {
    return '';
  }

  return Array.from(set)
    .filter((item) => item.startsWith(startingString))
    .map((item) => item.slice(startingString.length))
    .join('-');
}

export default cleanSet;
