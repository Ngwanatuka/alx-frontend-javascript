/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
    }
    Teacher.prototype.toString = function () {
        return "Object\n".concat(JSON.stringify(this, null, 2));
    };
    return Teacher;
}());
var director1 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "London",
    numberOfReports: 17,
};
console.log(director1);
var teacher3 = new Teacher("John", "Doe", false, "London");
console.log(teacher3.toString());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFNSSxpQkFDSSxTQUFpQixFQUNqQixRQUFnQixFQUNoQixnQkFBeUIsRUFDekIsUUFBZ0I7UUFFaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksT0FBTyxrQkFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFNRCxJQUFNLFNBQVMsR0FBYztJQUN6QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZUFBZSxFQUFFLEVBQUU7Q0FDdEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUZWFjaGVyIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgbG9jYXRpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICAgICAgbGFzdE5hbWU6IHN0cmluZyxcbiAgICAgICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbixcbiAgICAgICAgbG9jYXRpb246IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgICAgICB0aGlzLmZ1bGxUaW1lRW1wbG95ZWUgPSBmdWxsVGltZUVtcGxveWVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBPYmplY3RcXG4ke0pTT04uc3RyaW5naWZ5KHRoaXMsIG51bGwsIDIpfWA7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gICAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgICBsb2NhdGlvbjogXCJMb25kb25cIixcbiAgICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcblxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuY29uc3QgdGVhY2hlcjMgPSBuZXcgVGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIiwgZmFsc2UsIFwiTG9uZG9uXCIpO1xuXG5jb25zb2xlLmxvZyh0ZWFjaGVyMy50b1N0cmluZygpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==