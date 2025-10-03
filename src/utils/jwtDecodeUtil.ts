export const decodeJwt = (token: string): { header: any; payload: any } => {
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
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return {
      header: "Invalid JWT token",
      payload: "Invalid JWT token",
    };
  }
};
