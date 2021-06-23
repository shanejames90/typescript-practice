export class Point {
    constructor(private _x?: number, private _y?: number) {
        // this.x = x;
        // this.y = y;
    }
    // method 1
    draw() {
        // ...
        
    }
    // method 2
    getDistance(another: Point) {
        // ...
    }

    get x() {
        return this.x
    }

    set x(value) {
        if (value < 0)
            throw new Error('vvalue cannot be less than 0.')

        this.x = value
    }
}