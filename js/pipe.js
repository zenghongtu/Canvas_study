(function (w) {
    Pipe.len = 0;
    function Pipe(ctx, imgDown, imgUp, space, landHeight, speed) {
        this.ctx = ctx;
        this.imgDown = imgDown;
        this.imgUp = imgUp;
        this.space = space;
        this.landHeight = landHeight;
        this.speed = speed || 2;
        this.minHeight = 100;
        Pipe.len++;

        this.width = this.imgDown.width;
        this.height = this.imgDown.height;

        this.x = 300 + this.width * 3 * (Pipe.len - 1);
        this.y = 0;


        this._init();

    }

    extend(Pipe.prototype, {
        _init: function () {
            let maxHeight = this.ctx.canvas.height - this.space - this.minHeight - this.landHeight;
            let randomHeight = Math.random() * maxHeight;
            randomHeight = randomHeight < this.minHeight ? this.minHeight : randomHeight;

            this.downY = randomHeight - this.height;
            this.upY = randomHeight + this.space;


        },
        _drawPath: function () {
            this.ctx.rect(this.x, this.downY, this.width, this.height);
            this.ctx.rect(this.x, this.upY, this.width, this.height);
            // this.ctx.stroke();
        },
        draw: function () {
            this.ctx.drawImage(this.imgDown, this.x, this.downY);
            this.ctx.drawImage(this.imgUp, this.x, this.upY);
            this._drawPath();
        },
        update: function () {
            this.x -= this.speed;
            if (this.x < -this.width) {
                this._init();
                this.x += this.width * 3 * Pipe.len;
            }

        }
    })
    w.getPipe = function (ctx, imgDown, imgUp, space, landHeight, speed) {
        return new Pipe(ctx, imgDown, imgUp, space, landHeight, speed)
    }
}(window))