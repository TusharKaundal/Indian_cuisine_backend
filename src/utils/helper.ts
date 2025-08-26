export function sanitizeData(val: string | null): string | number | null {
    if (val === "-1" || val == null || val === "") {
        return null;
    }
    if (!isNaN(Number(val))) {
        return Number(val);
    }
    return val.toLowerCase().trim();
}