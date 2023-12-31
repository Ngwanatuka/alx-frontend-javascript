/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var studentsList = [
    {
        firstName: 'Moses',
        lastName: 'Doe',
        age: 27,
        location: 'South Africa',
    },
    {
        firstName: 'Sello',
        lastName: 'Ramare',
        age: 27,
        location: 'South Africa',
    },
];
document.addEventListener('DOMContentLoaded', function () {
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.textContent = 'First Name';
    var th2 = document.createElement('th');
    th2.textContent = 'Location';
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    table.appendChild(headerRow);
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.textContent = student.firstName;
        var td2 = document.createElement('td');
        td2.textContent = student.location;
        row.appendChild(td1);
        row.appendChild(td2);
        table.appendChild(row);
    });
    document.body.appendChild(table);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0UsSUFBTSxZQUFZLEdBQWM7SUFDOUI7UUFDRSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsS0FBSztRQUNmLEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLGNBQWM7S0FDekI7SUFDRDtRQUNFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLGNBQWM7S0FDekI7Q0FDRixDQUFDO0FBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzVDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBQy9CLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDN0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87UUFDM0IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdHVkZW50IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gIH1cbiAgXG4gIGNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW1xuICAgIHtcbiAgICAgIGZpcnN0TmFtZTogJ01vc2VzJyxcbiAgICAgIGxhc3ROYW1lOiAnRG9lJyxcbiAgICAgIGFnZTogMjcsXG4gICAgICBsb2NhdGlvbjogJ1NvdXRoIEFmcmljYScsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaXJzdE5hbWU6ICdTZWxsbycsXG4gICAgICBsYXN0TmFtZTogJ1JhbWFyZScsXG4gICAgICBhZ2U6IDI3LFxuICAgICAgbG9jYXRpb246ICdTb3V0aCBBZnJpY2EnLFxuICAgIH0sXG4gIF07XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdGgxLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUnO1xuICAgIGNvbnN0IHRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgdGgyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQodGgxKTtcbiAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQodGgyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuICBcbiAgICBzdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0ZDEudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgICAgIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0ZDIudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuICB9KTtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9