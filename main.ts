// declaring a variable in TS
// 'var' scoped to nearest function 
// 'let' scoped to that code block
import { Point } from './point'

var number = 1
let count = 2

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3]
let f: any[] = [1, true, 'a', false]

// delcaring enum
enum Color { Red = 0, Green = 1, Blue = 2 };

let backgroundColor = Color.Red

// type assertion 
let message 
message = 'abc'
let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')

// Arrow functions 
let doLog = (message) => console.log(message)
// same as this in javascript:
    // let log = function(messgae) {
    //     console.log(message)
    // }

// Custom types

// interface Point {
//     x: number,
//     y: number,
//     // can only have signature of a function
//     draw: () => void
// }
// better way: interface 
let drawPoint = (point: Point) => {
    // ...
}

// interaces cannot include any implemenation 

    // inline annotation
// let drawPoint = (point: { x: number, y: number }) => {
//     // ...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     //...
// }



// must change interface to class to adhere to chesion principle
// class Point {
//     constructor(private _x?: number, private _y?: number) {
//         // this.x = x;
//         // this.y = y;
//     }
//     // method 1
//     draw() {
//         // ...
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }
//     // method 2
//     getDistance(another: Point) {
//         // ...
//     }

//     get x() {
//         return this.x
//     }

//     set x(value) {
//         if (value < 0)
//             throw new Error('vvalue cannot be less than 0.')

//         this.x = value
//     }
// }

// access modifiers : public, private, protected
// by default all members are public 

let point = new Point(1, 2)
let x = point.x
point.x = 10
point.draw()