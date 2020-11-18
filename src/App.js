import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import { MonacoDiffEditor } from 'react-monaco-editor';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
      //renderSideBySide: false
    };
    const code1 = "// your original code...";
    const code2 = "// a different version...";
    return (
      <Container fluid>
        <Row>
          <Col className='header'>
            <h3>Diff Checker</h3>
          </Col>
        </Row>
        <Row>
          <Col className="editor-block" lg={6} md={12}>
            <p className='text-center'>Original Text</p>
            <MonacoEditor
              height="45vh"
              language="text/plane"
              theme="vs"
              value={code}
              options={options}
              onChange={this.onChange}
              editorDidMount={this.editorDidMount}
            />
          </Col>
          <Col className="editor-block" lg={6} md={12}>
            <p className='text-center'>Changed Text</p>
            <MonacoEditor
              height="45vh"
              language="javascript"
              theme="vs"
              value={code}
              options={options}
              onChange={this.onChange}
              editorDidMount={this.editorDidMount}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <hr/>
            <Button className="diff-btn">Check Diff</Button>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col className="editor-block diff-editor">
          <p className='text-center'>Difference</p>
            <MonacoDiffEditor
              height="45vh"
              language="javascript"
              original={code1}
              value={code2}
              options={options}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;