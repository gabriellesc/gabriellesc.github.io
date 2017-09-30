require 'ruby2d'

set width: 240, height: 280, viewport_width: 240, viewport_height: 280, background: 'white'

green = '#3dc06c'

Rectangle.new(x: 0, y: 0, width: 240, height: 190, color: 'black')
Rectangle.new(x: 20, y: 20, width: 200, height: 150, color: 'white')
Rectangle.new(x: 40, y: 40, width: 160, height: 110, color: 'black')

Rectangle.new(x: 80, y: 190, width: 80, height: 20, color: 'black')
Rectangle.new(x: 20, y: 210, width: 200, height: 20, color: 'black')
Rectangle.new(x: 0, y: 230, width: 240, height: 50, color: 'black')

Square.new(x: 40, y: 250, size: 20, color: 'white')
Square.new(x: 80, y: 250, size: 20, color: 'white')
Square.new(x: 120, y: 250, size: 20, color: 'white')
Square.new(x: 160, y: 250, size: 20, color: 'white')

Square.new(x: 60, y: 230, size: 20, color: 'white')
Square.new(x: 100, y: 230, size: 20, color: 'white')
Square.new(x: 140, y: 230, size: 20, color: 'white')
Square.new(x: 180, y: 230, size: 20, color: 'white')

Square.new(x: 40, y: 60, size: 20, color: green)
Square.new(x: 80, y: 60, size: 20, color: green)
Square.new(x: 120, y: 60, size: 20, color: green)

Rectangle.new(x: 60, y: 100, width: 40, height: 20, color: green)
Rectangle.new(x: 120, y: 100, width: 40, height: 20, color: green)

show
