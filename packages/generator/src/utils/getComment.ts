export const getComment = (comment?: string) => {
  return comment ? `"""\n ${comment} \n"""\n` : ''
}
