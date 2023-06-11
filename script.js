var saveBtnEl = $(".saveBtn");
var currentDayEl = $("#currentDay");
var textareaEl = $(".col-8 col-md-10 description");
var currentHour = dayjs().format("hh:mm:ss");

function displayDate() {
  var today = dayjs();
  $("#currentDay").text(today.format("dddd,MMMM [the] DD[th]"));
}
displayDate();

$(function () {});

function insertImput(schedules) {
  localStorage.setItem("schedules", JSON.stringify(schedules));
  console.log("schedule saved");
}
function getImput() {
  var schedules = localStorage.getItem("schedules");
  if (schedules) {
    schedule = JSON.parse(schedules);
  } else {
    schedules = [];
  }
  return schedules;
}

var save = function storeSchedule(event) {
  event.preventDefault();
  var ImputContaint = $(this).siblings(".description").val();

  var newSchedule = ImputContaint;
  var schedules = getImput();
  schedules.push(newSchedule);
  insertImput(schedules);
};

saveBtnEl.on("click", save);
