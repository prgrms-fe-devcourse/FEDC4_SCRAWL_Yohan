import React from "react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

class ArticleEditor extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor&nbsp;5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor, event);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor, event);
          }}
        />
      </div>
    );
  }
}

export default ArticleEditor;
