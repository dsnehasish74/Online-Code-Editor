import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as CodeMirror} from 'react-codemirror2'



function Editor(props){
    const{
        language,
        name,
        value,
        onchange
    }=props;
    function handelChange (editor, data, value) {
        onchange(value);
    }

    return(
        <div className="code-editor">
            <div className="editor_header">
                <hi>{name}</hi>
            </div>
            <CodeMirror
                value={value}
                options={{
                    mode: language,
                    lint: true,
                    theme: 'material',
                    lineWrapping: true,
                    lineNumbers: true
                }}
                className="editor"
                onBeforeChange={handelChange}
                />
        </div>

    );
}

export default Editor;