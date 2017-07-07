(function (w) {
    function Bird(ctx, img, wFrame, hFrame, x, y) {
        this.ctx = ctx;
        this.img = img;
        this.wFrame = wFrame;
        this.hFrame = hFrame;
        this.x = x;
        this.y = y;

        // 鸟的高度 和 宽度
        this.width = this.img.width / this.wFrame;
        this.height = this.img.height / this.hFrame;

        // 当前小鸟的帧数
        this.curFrame = 0;
        this.speed = 2;
        this.speedPlus = 0.5;
        this._bind();
    }

    Bird.prototype = {
        draw: function () {
            let baseRadian = Math.PI / 180 * 10;
            let maxRadian = Math.PI / 180 * 45;

            let rotateRadian = baseRadian * this.speed;

            rotateRadian = rotateRadian >= maxRadian ? maxRadian : rotateRadian;
            this.ctx.save();

            this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
            this.ctx.rotate(rotateRadian);

            this.ctx.drawImage(this.img,
                this.width * this.curFrame, 0, this.width, this.height,
                -this.width / 2, -this.height / 2, this.width, this.height);

            this.ctx.restore();

        },
        update: function () {
            this.curFrame = ++this.curFrame >= this.wFrame ? 0 : this.curFrame;
            this.y += this.speed;
            this.speed += this.speedPlus;
        },
        _bind: function () {
            let that = this;
            this.ctx.canvas.addEventListener("click", function () {
                that.speed = -3
            })
        }
    }
    let bird = null;
    w.getBird = function (ctx, img, wFrame, hFrame, x, y) {
        if (!bird) {
            bird = new Bird(ctx, img, wFrame, hFrame, x, y);
        }
        return bird;
    }
}(window));
