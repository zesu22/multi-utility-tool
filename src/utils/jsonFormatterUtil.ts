export const jsonFormatter = (input: string): string => {
    try {
        const jsonObject = JSON.parse(input);
        return JSON.stringify(jsonObject, null, 2); // Pretty print with 2 spaces indentation
    } catch (error) {
        return "Invalid JSON input";
    }
}

export const jsonCompressor = (input: string): string => {
    try {
        const jsonObject = JSON.parse(input);
        return JSON.stringify(jsonObject); // Minify JSON
    } catch (error) {
        return "Invalid JSON input";
    }
}
