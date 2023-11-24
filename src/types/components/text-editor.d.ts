export type TTextEditorField<T extends FieldValues> = UseControllerProps<T> & {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  wrapperClassName?: string;
  editorClassName?: string;
  toolbarClassName?: string;
};
