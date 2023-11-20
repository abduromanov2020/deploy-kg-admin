import { EditorState, ContentState } from 'draft-js';
import React from 'react';
import { Editor as WysiwygEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export interface DraftEditorProps {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  wrapperClassName?: string;
  editorClassName?: string;
  toolbarClassName?: string;
}

const DraftEditor: React.FC<DraftEditorProps> = ({
  editorState,
  setEditorState,
  wrapperClassName = '',
  editorClassName = '',
  toolbarClassName = '',
}) => {
  const handleChange = (newState: EditorState) => {
    setEditorState(newState);
  };

  return (
    <div>
      <WysiwygEditor
        wrapperClassName={`wrapper-class ${wrapperClassName}`}
        editorClassName={`editor-class ${editorClassName}`}
        toolbarClassName={`toolbar-class flex ${toolbarClassName}`}
        editorState={editorState}
        onEditorStateChange={handleChange}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'embedded',
            'emoji',
            'image',
            'remove',
            'history',
          ],
          inline: {
            inDropdown: true,
            options: [
              'bold',
              'italic',
              'underline',
              'strikethrough',
              'monospace',
            ],
          },
          blockType: {
            inDropdown: true,
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
          },
          fontSize: {
            options: [12, 16, 24, 32, 48, 64, 72, 96, 120, 144, 288, 432],
          },
          list: {
            inDropdown: true,
            options: ['unordered', 'ordered'],
          },
          textAlign: {
            inDropdown: true,
            options: ['left', 'center', 'right', 'justify'],
          },
          colorPicker: {
            inDropdown: true,
            options: ['hex', 'rgb', 'hsl', 'hsv', 'clear'],
          },
          link: {
            inDropdown: true,
            options: ['link', 'unlink'],
          },
          emoji: {
            inDropdown: true,
            options: ['emoji'],
          },
          image: {
            previewImage: false,
            alt: { present: true, mandatory: true },
          },
          history: {
            inDropdown: false,
            options: ['undo', 'redo'],
          },
        }}
      />
    </div>
  );
};

export default DraftEditor;
