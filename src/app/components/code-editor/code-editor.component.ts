import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html'
})
export class CodeEditorComponent implements OnInit {

  options: any = {
    mode: {
      name: "javascript",
      json: true
    },
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    theme:"default",
    tabSize: 2,
    autofocus: true
  };

  data?: string;

  ngOnInit(): void {
    this.data = "";
  }

  protected setEditorContent(event: any) {
    console.log(event)
  }
}
