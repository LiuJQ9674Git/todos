
define(['react','react-bootstrap/lib/ButtonToolbar',
  'react-bootstrap/lib/Button'], function(React,ButtonToolbar,Button) {
  const buttonsInstance = (
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
      <Button bsSize="large" active>Button</Button>
    </ButtonToolbar>
  );

  React.render(buttonsInstance, document.getElementById('appButton'));

});

