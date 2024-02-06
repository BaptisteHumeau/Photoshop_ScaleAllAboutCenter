//Scale all layers within a Photoshop folder about their respective centers.

var scaleFactor = prompt("Enter the scale factor:");

if (isNaN(scaleFactor)) {
  alert("Invalid scale factor");
} else {
  // Get the selected layer folder
  var layerFolder = app.activeDocument.activeLayer;

  // Loop through all the layers in the folder
  for (var i = 0; i < layerFolder.layers.length; i++) {
    var layer = layerFolder.layers[i];

    // Calculate the new width and height based on the scale factor
    var newWidth = layer.bounds.width * scaleFactor;
    var newHeight = layer.bounds.height * scaleFactor;

    // Calculate the new position based on the center of the layer
    var centerX = layer.bounds.left + layer.bounds.width / 2;
    var centerY = layer.bounds.top + layer.bounds.height / 2;
    var newPosition = [centerX - newWidth / 2, centerY - newHeight / 2];

    // Scale and move the layer
    layer.resize(scaleFactor * 100, scaleFactor * 100, AnchorPosition.MIDDLECENTER);
    layer.translate(newPosition[0] - layer.bounds.left, newPosition[1] - layer.bounds.top);
  }
}
