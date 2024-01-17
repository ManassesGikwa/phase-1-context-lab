/* Your Code Here */
let createEmployeeRecord = (employeeCard) => {
  let employee
    return employee = {
       firstName: employeeCard[0],
       familyName: employeeCard[1],
        title: employeeCard[2],
         payPerHour: employeeCard[3],
         timeInEvents: [],
          timeOutEvents: []
       }
   }
  
// Converts each employee Array into an employee record 
let createEmployeeRecords = (employeesCardsData) => {
  return employeesCardsData.map(createEmployeeRecord)
}
  
// Employee's check in time 
function createTimeInEvent(dateStamp) {
 let [date, hour] = dateStamp.split(' ');
   this.timeInEvents.push({
     type: "TimeIn",
       hour: parseInt(hour, 10),
         date
  })
     return this
  }
  
// Employee's check out time 
function createTimeOutEvent(dateStamp) {
 let [date, hour] = dateStamp.split(' ');
   this.timeOutEvents.push({
     type: "TimeOut",
       hour: parseInt(hour, 10),
         date
   })
        return this
  }
  
// finding the number of hours elapsed between that date's timeInEvent and timeOutEvent
function hoursWorkedOnDate(dateOfTheForm) {
 let clockIn = this.timeInEvents.find((e) => e.date == dateOfTheForm).hour
   let clockOut = this.timeOutEvents.find((e) => e.date == dateOfTheForm).hour
   return (clockOut - clockIn)/100
  }
  
// multiply the hours by the record's payRate to determine amount owed. 
function wagesEarnedOnDate(dateOfTheForm) {
const payPerHour = parseInt(this.payPerHour)
  const hoursWorked = hoursWorkedOnDate.call(this, dateOfTheForm)
    return payPerHour * hoursWorked
  }
  
function findEmployeeByFirstName(AllEmployeeRecords, firstName) {
return AllEmployeeRecords.find((e) => {
  return e.firstName
 })
}
  
//accumulate the value of all dates worked by the employee in the record 
function calculatePayroll(AllEmployeeRecords) {
return AllEmployeeRecords.reduce((previoutAmount, employee) => {
  return previoutAmount + allWagesFor.call(employee)
   }, 0)
  }
  


/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) 

  return payable;
}
