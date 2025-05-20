
export const splitStringUsingRegex = (inputString: string): string[] => {
  const caracteres: string[] = []
  const regex = /[\s\S]/gu;

  let match

  while ((match = regex.exec(inputString)) !== null) {
    caracteres.push(match[0])
  }
  return caracteres
}


