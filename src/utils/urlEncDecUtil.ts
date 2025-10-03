export const urlEncoder = (str: string): string => {
  return encodeURIComponent(str);
};

export const urlDecoder = (str: string): string => {
  return decodeURIComponent(str);
};
