import React from "react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface ArticleEditorProps {
  stateChange: (value: string) => void;
  state?: string;
  width: string;
}
// const editorConfiguration = {
//   toolbar: ["bold", "italic"]
// };
class ArticleEditor extends React.Component<ArticleEditorProps> {
  render() {
    return (
      <div style={{ width: this.props.width }}>
        <CKEditor
          config={{ language: "ko" }}
          editor={ClassicEditor}
          // config={editorConfiguration}
          data={this.props.state ? this.props.state : ""}
          // onReady={(editor) => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log("Editor is ready to use!", editor);
          // }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            this.props.stateChange(data);
          }}
          // onBlur={(event, editor) => {
          //   console.log("Blur.", editor, event);
          // }}
          // onFocus={(event, editor) => {
          //   console.log("Focus.", editor, event);
          // }}
        />
      </div>
    );
  }
}

export default ArticleEditor;
