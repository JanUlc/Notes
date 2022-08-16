export const getReadableContent = (editorState) => {
  return editorState
    ? editorState.getCurrentContent().getPlainText("\u0001")
    : "Title";
};
