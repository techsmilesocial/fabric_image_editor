// Import stylesheets
import './style.css';
import { fabric } from 'fabric';

var canvas = new fabric.Canvas('c');

//canvas.setActiveObject(rect);

document.querySelector('.saveBtn').onclick = () => {
  const dataURL = canvas.toDataURL({
    width: canvas.width,
    height: canvas.height,
    left: 0,
    top: 0,
    format: 'png',
  });
  const link = document.createElement('a');
  link.download = 'image.png';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

document.querySelector('.addRect').onclick = () => {
  var rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: document.querySelector('.rectColor').value,
    width: 200,
    height: 100,
  });

  canvas.add(rect);
};

document.querySelector('.addCircle').onclick = () => {
  var circle = new fabric.Circle({
    left: 100,
    top: 50,
    radius: 50,
    fill: document.querySelector('.circleColor').value,
  });

  canvas.add(circle);
};

document.querySelector('.addLine').onclick = () => {
  var circle = new fabric.Line([50, 10, 200, 150], {
    stroke: document.querySelector('.lineColor').value,
  });

  canvas.add(circle);
};

document.querySelector('.removeSelected').onclick = () => {
  canvas.remove(canvas.getActiveObject());
};

document.querySelector('.picUpload').onchange = (event) => {
  const img = new Image();
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = () => {
    var imgInstance = new fabric.Image(img, {
      left: 10,
      top: 10,
      angle: 0,
      width: img.width,
      height: img.height,
    });
    canvas.add(imgInstance);
  };
};
