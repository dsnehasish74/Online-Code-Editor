import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';

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
                    lineWrapping: true,
                    smartIndent: true,
                    lineNumbers: true,
                    foldGutter: true,
                    theme:'material',
                    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                    autoCloseTags: true,
                    keyMap: 'sublime',
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    extraKeys: {
                    'Ctrl-Space': 'autocomplete'
                    }
                }}
                className="editor"
                onBeforeChange={handelChange}
                />
        </div>

    );
}

export default Editor;