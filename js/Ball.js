this.ninjabonsai = this.ninjabonsai || {};

(function ()
{
    Ball.prototype.x;
    Ball.prototype.y;
    Ball.prototype.r;

    Ball.prototype.scale = 1;
    Ball.prototype.color = {};
    Ball.prototype.alpha = 1;

    Ball.prototype.repeatCount;
    Ball.prototype.visible = true;

    function Ball(x, y, r, color, alpha)
    {
//        console.log("Ball");

        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.alpha = alpha;
    }

    // public instance method
    Ball.prototype.setPos = function (x, y)
    {
        this.x = x;
        this.y = y;
    };

    ninjabonsai.Ball = Ball;
}());