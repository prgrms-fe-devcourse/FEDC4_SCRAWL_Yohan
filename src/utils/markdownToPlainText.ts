export const markdownToPlainText = (html: string) => {
  const plainText = html.replace(/#/g, "").replace(/```/g, "");

  return plainText;
};
