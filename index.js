/* Your Code Here */
const createEmployeeRecord = (array) => ({
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  });
  
  const createEmployeeRecords = (array) => array.map(createEmployeeRecord);
  
  const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', hour: parseInt(hour), date });
    return this;
  };
  
  const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', hour: parseInt(hour), date });
    return this;
  };
  
  const hoursWorkedOnDate = function(date) {
    const timeInEvent = this.timeInEvents.find(({ date: d }) => d === date);
    const timeOutEvent = this.timeOutEvents.find(({ date: d }) => d === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  };
  
  const wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  };
  
  const findEmployeeByFirstName = (srcArray, firstName) => 
    srcArray.find(({ firstName: name }) => name === firstName);
  
  const calculatePayroll = (array) =>
    array.reduce((total, employee) => total + allWagesFor.call(employee), 0);

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
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


