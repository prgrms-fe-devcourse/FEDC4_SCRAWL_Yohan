import DOMPurify from "dompurify";

export const htmlToPlainText = (html: string) => {
  const sanitizedHTML = DOMPurify.sanitize(html);
  const plainText = sanitizedHTML.replace(/<[^>]*>/g, "");

  return plainText;
};
