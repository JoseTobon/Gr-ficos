function draw_line(x1, y1, x2, y2) {
    
    let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;
    
    dx = x2 - x1;
    dy = y2 - y1;
    
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);
    
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;
    
    if (dy1 <= dx1) {
        if (dx >= 0) {
            x = x1; y = y1; xe = x2;
        } else {
            x = x2; y = y2; xe = x1;
        }
        
        point(x, y);
        
        for (i = 0; x < xe; i++) {
            x = x + 1;
            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                } else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }
            
            point(x, y);
        }
    } else {
        if (dy >= 0) {
            x = x1; y = y1; ye = y2;
        } else {
            x = x2; y = y2; ye = y1;
        }
        
        point(x, y);
        
        for (i = 0; y < ye; i++) {
            y = y + 1;
            if (py <= 0) {
                py = py + 2 * dx1;
            } else {
                if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                    x = x + 1;
                } else {
                    x = x - 1;
                }
                py = py + 2 * (dx1 - dy1);
            }
            
            point(x, y);
        }
    }
 }

function setup() {
  createCanvas(400,400);
}


function draw() {
  background(0);
  stroke(225);
  draw_line(1,2,100,20);
  draw_line(10,200,50,10);
  draw_line(300,300,10,10);
  draw_line(200,300,250,50);
  draw_line(350,350,100,300);
}
