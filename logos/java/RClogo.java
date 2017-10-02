import java.awt.*;       // Using AWT's Graphics and Color
import java.awt.event.*; // Using AWT event classes and listener interfaces
import javax.swing.*;    // Using Swing's components and containers

class RClogo extends JFrame {
    public static final int CANVAS_WIDTH  = 240;
    public static final int CANVAS_HEIGHT = 280;

    private DrawCanvas canvas;
    private Color green = new Color(61, 192, 108);	    
    
    public RClogo() {
	canvas = new DrawCanvas();    // Construct the drawing canvas
	canvas.setPreferredSize(new Dimension(CANVAS_WIDTH, CANVAS_HEIGHT));

	// Set the Drawing JPanel as the JFrame's content-pane
	Container cp = getContentPane();
	cp.add(canvas);

	setDefaultCloseOperation(EXIT_ON_CLOSE);   // Handle the CLOSE button
	pack();
	setVisible(true);    // "super" JFrame show
    }
    
    private class DrawCanvas extends JPanel {
	public void paintComponent (Graphics g) {
	    super.paintComponent(g);
	    setBackground(Color.white);
		
	    Graphics2D g2 = (Graphics2D) g;
		
	    Polygon body = new Polygon();
	    int[][] bodyCoords = {{0,0}, {0,190}, {80,190}, {80,210}, {20,210}, {20,230},
				  {0,230}, {0,280}, {240,280}, {240,230}, {220,230},
				  {220,210}, {160,210}, {160,190}, {240,190}, {240,0}};
	    for (int[] pair : bodyCoords) {
		body.addPoint(pair[0], pair[1]);
	    }

	    g2.setColor(Color.black);
	    g2.fillPolygon(body);

	    g2.setColor(Color.white);
	    g2.fillRect(20, 20, 200, 150);

	    g2.setColor(Color.black);
	    g2.fillRect(40, 40, 160, 110);

	    g2.setColor(Color.white);
	    int[] keyX = {40, 80, 120, 160};
	    for (int x : keyX) {
		g2.fillRect(x, 250, 20, 20);
		g2.fillRect(x + 20, 230, 20, 20);	    
	    }

	    g2.setColor(green);
	    g2.fillRect(40, 60, 20, 20);
	    g2.fillRect(80, 60, 20, 20);
	    g2.fillRect(120, 60, 20, 20);

	    g2.fillRect(60, 100, 40, 20);
	    g2.fillRect(120, 100, 40, 20);
	}
    }
    
    public static void main(String[] args) {
	// Run the GUI codes on the Event-Dispatching thread for thread safety
	SwingUtilities.invokeLater(new Runnable() {
		@Override
		public void run() {
		    new RClogo(); // Let the constructor do the job
		}
	    });
    }
}
