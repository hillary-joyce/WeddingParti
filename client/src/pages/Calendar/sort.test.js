
const sortCalendarDates = (tempEvents) => {
  let events = tempEvents.sort(function(a,b){
    var c = new Date(a);
    var d = new Date(b);
    return c-d;
  })
  return(events);
}

var sampleDates = ["3/6/18", "1/6/18", "5/6/18", "2/6/18"]

sortCalendarDates(sampleDates)


test('sort dates in order', () => {
  expect(sortCalendarDates(sampleDates))
  .toEqual(["1/6/18", "2/6/18", "3/6/18", "5/6/18"]);
});
