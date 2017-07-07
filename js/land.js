(function(w){
Land.len = 0;
function Land(ctx, img, speed) {
    this.ctx = ctx;
    this.img = img;
    this.speed = speed || 2;


    this.width = this.img.width;
    this.height = this.img.height;
    Land.len++;

    this.x = this.width * (Land.len - 1);
    this.y = ctx.canvas.height - this.height;
}
extend(Land.prototype, {
    draw: function () {
        this.ctx.drawImage(this.img, this.x, this.y);
    },
    update: function () {
        this.x -= this.speed;
        this.x += this.x <= -this.width ? this.width * Land.len : 0;
    }
})
w.getLand = function(ctx, img, speed){
    return new Land(ctx, img, speed);
}
}(window))