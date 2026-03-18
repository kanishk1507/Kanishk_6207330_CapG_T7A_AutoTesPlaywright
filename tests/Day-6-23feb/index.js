var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("-------------------------OOPSSss--------------------------");
var car = /** @class */ (function () {
    function car(brand, colour) {
        this.brand = brand;
        this.colour = colour;
        this.display = function () {
            console.log("new display");
        };
        this.display();
    }
    car.prototype.display = function () {
        console.log("display");
    };
    car.prototype.start = function () {
        console.log("this is my car");
    };
    return car;
}());
var ca = new car("merc", "grey");
// ca.brand="merc"
console.log(ca.brand);
console.log(ca);
console.log(ca.display);
console.log(ca.display());
console.log("----------------------Access Modifierss----------------------");
var Person = /** @class */ (function () {
    function Person() {
        this.name = "kanishk";
    }
    return Person;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.company = "test yantra";
        return _this;
    }
    teacher.prototype.display = function () {
        console.log(this.name);
        console.log(this.company);
    };
    return teacher;
}(Person));
var s = new teacher();
s.display();
