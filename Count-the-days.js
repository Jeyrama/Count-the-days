/*
Little Annie is very excited for upcoming events. 
She wants to know how many days she has to wait for a specific event.
Your job is to help her out.

Task: 
  Write a function which returns the number of days from today till the given date. 
  The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days".
*/


// Solution

function countDays(date) {
  let today = new Date();
  let one_day = 1000 * 60 * 60 * 24;
  let daysFromToday = Math.round((date.getTime() - today.getTime()) / one_day);

  if (daysFromToday < 0) {
    return 'The day is in the past!';
  }
  if (daysFromToday == 0) {
    return 'Today is the day!';
  }
  return `${daysFromToday} days`;
}

// or

function countDays(d){
  const start = Date.now()
  let days = Math.round(Math.abs((start - d.getTime())/86400000))
  return days === 0 ? 'Today is the day!'
    : start > d.getTime() ? 'The day is in the past!'
    : `${days} days`
}