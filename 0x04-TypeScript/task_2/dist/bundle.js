/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/******/ (() => { // webpackBootstrap
const __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
const Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
const Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBYUE7SUFBQTtJQVlBLENBQUM7SUFYRywrQkFBWSxHQUFaO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLE9BQU8sd0JBQXdCLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFYRyw4QkFBWSxHQUFaO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDM0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM1QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDeEI7U0FBTTtRQUNILE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN6QjtBQUNMLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM1QyxPQUFRLFFBQXFCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQ2xFLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUM3QyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7S0FDN0M7U0FBSztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztLQUM1QztBQUNMLENBQUM7QUFFRCxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7QUFDNUQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0NBQW9DO0FBR3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRyxrQkFBa0I7QUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLG1CQUFtQjtBQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gICAgfVxuICAgIFxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcbiAgICB9XG4gICAgXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICAgIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiO1xuICAgIH1cbiAgICBcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKSB7XG4gICAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCkpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKTtcbiAgICB9XG59XG5cbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAvLyBPdXRwdXQ6IEdldHRpbmcgdG8gd29ya1xuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAvLyBPdXRwdXQ6IEdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcblxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTsgICAvLyBPdXRwdXQ6IFRlYWNoZXJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgIC8vIE91dHB1dDogRGlyZWN0b3JcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpOyAvLyBPdXRwdXQ6IERpcmVjdG9yXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=