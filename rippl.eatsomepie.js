function EatSomePie(options)
{
  if(typeof options.radius === 'undefined')
  {
    options.radius = 50;
  }

  if(typeof options.colorBase === 'undefined')
  {
    options.colorBase = '#ccc';
  }

  if(typeof options.colorEaten === 'undefined')
  {
    options.colorEaten = '#999';
  }

  if(typeof options.speed === 'undefined')
  {
    options.speed = 0;
  }

  // create canvas
  var canvas = new rippl.Canvas({
    width: options.radius,
    height: options.radius,
  });

  // create base circle
  var circleBase = new rippl.Circle({
    color: options.colorBase,
    x: options.radius/2,
    y: options.radius/2,
    radius: options.radius/2,
    z: 100
  });

  // create eaten circle
  var circleEaten = new rippl.Circle({
    color: options.colorEaten,
    x: options.radius/2,
    y: options.radius/2,
    radius: options.radius/2,
    z: 101,
    rotation: Math.PI * 1.5,
    angle: 0
  });

  // add the cirles to canvas
  canvas.add(circleBase);
  canvas.add(circleEaten);

  // eaten animation
  circleEaten.transform({
    duration: options.speed,
    to: {
      angle: Math.PI * (2 * (options.eaten/100))
    }
  });

  // show eaten percentage
  if(typeof options.showEaten === 'boolean' && options.showEaten === true)
  {
    var eatenText = new rippl.Text({
      label: options.eaten + '%',
      x: options.radius/2,
      y: options.radius/2,
      size: 11,
      color: "#000",
      z: 102
    });

    canvas.add(eatenText);
  }

  // show label
  if(typeof options.label !== 'undefined')
  {
    if(typeof options.label !== 'string')
    {
      options.label = options.eaten + '%';
    }

    if(typeof options.labelSize === 'undefined')
    {
      options.labelSize = 11;
    }

    if(typeof options.labelColor === 'undefined')
    {
      options.labelColor = '#000';
    }

    var eatenText = new rippl.Text({
      label: options.label,
      x: options.radius/2,
      y: options.radius/2,
      size: options.labelSize,
      color: options.labelColor,
      z: 102
    });

    canvas.add(eatenText);
  }

  // add circles to DOM
  document.getElementById(options.target).appendChild(canvas.getDocumentElement());
}