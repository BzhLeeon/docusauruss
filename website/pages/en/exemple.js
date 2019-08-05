const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const translate = require('../../server/translate.js').translate;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function exemple(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>
            <translate>
            Hello World!
            </translate>
        </h1>
        <p>This is my first page!</p>
      </Container>
    </div>
  );
}

module.exports = exemple;
