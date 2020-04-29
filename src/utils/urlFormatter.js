export const urlFormatter = (id, string) =>
  `/${id}/${string.replace(/\s/g, '-').toLowerCase()}`;
