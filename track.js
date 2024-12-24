class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        for(let a =0; a < Math.PI * 2; a += 0.4){
            const pos = this.getPosition(a);

            ctx.lineTo(pos.x, pos.y);
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.stroke();
    }

    getPosition(offset) {
        // Calculate position on the track based on the offset (angle in radians)
        return {
            x: this.center.x + this.radius * Math.cos(offset),
            y: this.center.y + this.radius * Math.sin(offset),
        };
    }
}
