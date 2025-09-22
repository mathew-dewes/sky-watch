export function slugify(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}