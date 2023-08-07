import formidable from 'formidable'

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    })
}
export function extractFieldValue(fields: formidable.Fields, fieldName: string): string {
    const fieldValue = fields[fieldName];
    return Array.isArray(fieldValue) ? fieldValue[0] : fieldValue;
}
