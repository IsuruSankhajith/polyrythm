class Ball {
    constructor(track, radius, speed, color = "white") {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.color = color; // Allow custom color
        this.offset = 0;
        this.direction = 1; 
        this.center = this.track.getPosition(this.offset);
    }

    move() {
        this.offset += this.speed * this.direction;
        // Wrap the offset to prevent large values
        this.offset %= 2 * Math.PI;
        this.center = this.track.getPosition(this.offset);
        if(this.center.y > this.track.center.y){
            this.direction *= 1;
            playSound(); 
        }
            
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color; // Use custom color
        ctx.fill();
        ctx.strokeStyle = "white"; // Add stroke for visibility
        ctx.stroke();
    }
}
