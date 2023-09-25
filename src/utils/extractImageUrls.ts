export const extractImageUrls = (content: string) => {
  const regex = /!\[image\]\((.*?)\)/g;
  const matches = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1]);
  }

  return matches;
};
