export function getNameInitials(name: string) {
  return name
    .trim()
    .split(' ')
    .filter(word => word)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}
