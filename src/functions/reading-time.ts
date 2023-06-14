export const calculateReadingTime = (markdown: string): number => {
    const plainText = removeMarkdownSyntax(markdown);
    const wordCount = countNumberOfWords(plainText);
    return Math.ceil(wordCount / 265);
  }
  
  const removeMarkdownSyntax = (markdown: string): string => {
    return markdown.replace(/[^a-zA-Z0-9 ]/g, '');
  }
  
  const countNumberOfWords = (plainText: string): number => {
    return plainText.split(' ').length;
  }