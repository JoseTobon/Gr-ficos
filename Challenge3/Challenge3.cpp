// First Program in OpenGL
// Compile with:
// g++ hello-OpenGL.cpp -o hello-opengl -lglut -lGLU -lGL

#include <GL/glut.h>
// (or others, depending on the system in use)
void init (void)
{
    glClearColor (1.0, 1.0, 1.0, 0.0);    // Set display-window color to white.
    glMatrixMode (GL_PROJECTION);         // Set projection parameters.
    gluOrtho2D (0.0, 400.0, 0.0, 400.0);  //coordinate limits for the picture we want to display.
}
void lineSegment (void)
{
    glClear (GL_COLOR_BUFFER_BIT);        // Clear display window.

    glColor3f (0.0, 0.4, 0.2);            // Set line segment color to green.
    glBegin (GL_LINES);
      glVertex2i (1, 2);                 // Specify line-segment geometry.
      glVertex2i (100, 20);
      glVertex2i (10, 200);
      glVertex2i (50, 10);
      glVertex2i (300, 300);
      glVertex2i (10, 10);
      glVertex2i (200, 300);
      glVertex2i (250, 50);
      glVertex2i (350, 350);
      glVertex2i (100, 300);
    glEnd ( );
    glFlush ( );                    // Process all OpenGL routines as quickly as possible.
}

int round(float n)
{
    if (n - (int)n < 0.5)
        return (int)n;
    return (int)(n + 1);
}

void grafica (int x0, int y0, int x1, int y1) {
	
	glBegin (GL_POINTS);
	int dx = x1 - x0;
    int dy = y1 - y0;
 
    int step;
    if (abs(dx) > abs(dy))
        step = abs(dx);
    else
        step = abs(dy);
    float x_incr = (float)dx / step;
    float y_incr = (float)dy / step;
    float x = x0;
    float y = y0;
    for (int i = 0; i < step; i++) {
    	glVertex2i (round(x), round(y));
        x += x_incr;
        y += y_incr;
    }
    glEnd ( );
    glFlush ( );
}

void points2 (void) {
    glClear (GL_COLOR_BUFFER_BIT);
    glColor3f (0.0, 0.4, 0.2);
   
    grafica(1,2,100,20);
    grafica(10,200,50,10);
    grafica(300,300,10,10);
    grafica(200,300,250,50);
    grafica(350,350,100,300);
}

int main (int argc, char** argv)
{
    glutInit (&argc, argv);    // Initialize GLUT.
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);    // Set display mode.
    glutInitWindowPosition (50, 100);    // Set top-left display-window position.
    glutInitWindowSize (400, 400);    // Set display-window width and height.
    glutCreateWindow ("CHALLENGE 3"); // Create display window.
    init (); // Execute initialization procedure.
    glutDisplayFunc (points2);
    glutMainLoop ( );    // Display everything and wait.
    return 0;
}
