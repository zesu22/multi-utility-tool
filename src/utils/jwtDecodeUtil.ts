type JwtDecodeResult = {
  header: string;
  payload: string;
};

export const decodeJwt = (token: string): JwtDecodeResult => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT format");
    }

    const decodedHeader = JSON.parse(atob(parts[0]));
    const decodedPayload = JSON.parse(atob(parts[1]));

    return {
      header: decodedHeader,
      payload: decodedPayload,
    };
  } catch (error: unknown) {
    console.error("Error decoding JWT:", error);
    return {
      header: "Invalid JWT token",
      payload: "Invalid JWT token",
    };
  }
};
