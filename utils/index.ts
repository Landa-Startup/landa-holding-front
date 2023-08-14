import formidable from 'formidable'
import moment from 'moment';
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



export function parseDateString(dateString: string): Date | null {
  const parsedDate = moment(dateString, 'MM/DD/YYYY');
  if (parsedDate.isValid()) {
    return parsedDate.toDate();
  }
  return null; // Return null for invalid date strings
}