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
      originalText: "",
      changedText: "",
      differenceText: "",
    };
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onChangeOriginalText(newValue, e) {
    this.setState({
      originalText: newValue,
    });
  }

  onChangeChangedText(newValue, e) {
    this.setState({
      changedText: newValue,
    });
  }

  render() {
    const options = {
      selectOnLineNumbers: true,
      //renderSideBySide: false
    };

    return (
      <Container fluid>
        <Row>
          <Col className="header">
            <h3>Diff Checker</h3>
          </Col>
        </Row>
        <Row>
          <Col className="editor-block" lg={6} md={12}>
            <p className="text-center">Original Text</p>
            <MonacoEditor
              height="45vh"
              language="text/plane"
              theme="vs"
              value={this.state.originalText}
              options={options}
              onChange={this.onChangeOriginalText.bind(this)}
              editorDidMount={this.editorDidMount}
            />
          </Col>
          <Col className="editor-block" lg={6} md={12}>
            <p className="text-center">Changed Text</p>
            <MonacoEditor
              height="45vh"
              language="text/plane"
              theme="vs"
              value={this.state.changedText}
              options={options}
              onChange={this.onChangeChangedText.bind(this)}
              editorDidMount={this.editorDidMount}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="editor-block diff-editor">
            <p className="text-center">Difference</p>
            <MonacoDiffEditor
              height="45vh"
              language="text/plane"
              original={this.state.originalText}
              value={this.state.changedText}
              options={options}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;