import { getReadableContent } from "./getReadableContent";

export const createTitle = (content, length) => {
  const convertedContent = getReadableContent(content);
  return convertedContent ? convertedContent.slice(0, length) : "Title";
};
