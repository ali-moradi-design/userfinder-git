var React = require('react');
var ReactPivot = require('react-pivot');

React.render(
  <ReactPivot
    rows={rows}
    dimensions={dimensions}
    reduce={reduce}
    calculations={calculations}
    nPaginateRows={25}
  />,
  document.body
);
