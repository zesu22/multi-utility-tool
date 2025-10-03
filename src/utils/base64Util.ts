export const base64Encoder = (str: string): string => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  // Convert Uint8Array to a string of single-byte characters
  const binaryString = String.fromCodePoint(...data);
  return btoa(binaryString);
};

export const base64Decoder = (str: string): string => {
    return Buffer.from(str, 'base64').toString('utf8');
}
