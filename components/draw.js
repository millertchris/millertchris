import Paper from 'paper';

const draw = () => {
  var myPath;

  Paper.view.onMouseDown = (event) => {
    myPath = new Paper.Path();
    myPath.strokeColor = '#f2edda';
    myPath.strokeWidth = 4;
    myPath.strokeCap = 'round';
    myPath.strokeLinejoin = 'round';
  };

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };

  Paper.view.onMouseUp = (event) => {
    myPath.simplify();
  };

  Paper.view.draw();
};

export default draw;
