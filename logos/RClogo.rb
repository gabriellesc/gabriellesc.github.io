require 'ruby2d'

green = '#3dc06c'

Rectangle.new(x: 0, y: 0, width: 120, height: 95, color: 'black')
Rectangle.new(x: 10, y: 10, width: 100, height: 75, color: 'white')
Rectangle.new(x: 20, y: 20, width: 80, height: 55, color: 'black')

Rectangle.new(x: 40, y: 95, width: 40, height: 10, color: 'black')
Rectangle.new(x: 10, y: 105, width: 100, height: 10, color: 'black')
Rectangle.new(x: 0, y: 115, width: 120, height: 25, color: 'black')

Square.new(x: 20, y: 125, size: 10, color: 'white')
Square.new(x: 40, y: 125, size: 10, color: 'white')
Square.new(x: 60, y: 125, size: 10, color: 'white')
Square.new(x: 80, y: 125, size: 10, color: 'white')

Square.new(x: 30, y: 115, size: 10, color: 'white')
Square.new(x: 50, y: 115, size: 10, color: 'white')
Square.new(x: 70, y: 115, size: 10, color: 'white')
Square.new(x: 90, y: 115, size: 10, color: 'white')

Square.new(x: 20, y: 30, size: 10, color: green)
Square.new(x: 40, y: 30, size: 10, color: green)
Square.new(x: 60, y: 30, size: 10, color: green)

Rectangle.new(x: 30, y: 50, width: 20, height: 10, color: green)
Rectangle.new(x: 60, y: 50, width: 20, height: 10, color: green)

x = get :width
puts x

#show

#set viewport_width: 120, viewport_height: 140
