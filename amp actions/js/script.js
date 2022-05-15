$(() => {
  const cardBody = $("div.card div.card-body");
  const stop = $("#stop");
  const run = $("#run");
  const schedule = $("#schedule");
  const restart = $("#restart");
  const actionStatus = $("#actionStatus");
  const reset = $("#reset");

  cardBody.children().hide();
  cardBody.addClass("hides");
  stop.hide();
  reset.hide();
  $.notify("Bydefault the Action is stopped", "error");

  run.confirm({
    theme: "supervan",
    title: "Confirm",
    content: "Are you sure you want to run the action?",
    buttons: {
      Yes: function () {
        actionStatus
          .removeClass("bg-success bg-danger bg-warning bg-info")
          .addClass("bg-success")
          .text("Running");
        stop.show();
        restart.show();
        run.hide();
        schedule.hide();
        reset.hide();
        hideBody();
        $.notify("Action switched To Running", "success");
      },
      No: function () {
        $.alert("Canceled!");
      },
    },
  });

  restart.confirm({
    theme: "supervan",
    title: "Confirm",
    content: "Are you sure you want to Restart the action?",
    buttons: {
      Yes: function () {
        actionStatus
          .removeClass("bg-success bg-danger bg-warning bg-info")
          .addClass("bg-danger")
          .text("Stopped");
        run.show();
        schedule.show();
        restart.show();
        stop.hide();
        reset.hide();
        hideBody();
        $.notify("All the actions are restarted", "error");
      },
      No: function () {
        $.alert("Canceled!");
      },
    },
  });
  schedule.confirm({
    theme: "supervan",
    title: "Confirm",
    content: "Are you sure you want to schedule the action?",
    buttons: {
      Yes: function () {
        actionStatus
          .removeClass("bg-success bg-danger bg-warning bg-info")
          .addClass("bg-warning")
          .text("schedule");
        run.show();
        reset.show();
        stop.hide();
        schedule.hide();
        restart.hide();
        showBody();
        $.notify("Action switched to schedule", "warn");
      },
      No: function () {
        $.alert("Canceled!");
      },
    },
  });
  reset.confirm({
    theme: "supervan",
    title: "Confirm",
    content: "Are you sure you want to reset the scheduled action?",
    buttons: {
      Yes: function () {
        hideBody();
        $.notify("Reset the schedule Action", "info");
      },
      No: function () {
        $.alert("Canceled!");
      },
    },
  });
  stop.confirm({
    theme: "supervan",
    title: "Confirm",
    content: "Are you sure you want to stop the action?",
    buttons: {
      Yes: function () {
        actionStatus
          .removeClass("bg-success bg-danger bg-warning bg-info")
          .addClass("bg-danger")
          .text("Stopped");
        restart.hide();
        stop.hide();
        reset.hide();
        run.show();
        schedule.show();
        hideBody();
        $.notify("Action switched To Stopped ", "error");
      },
      No: function () {
        $.alert("Canceled!");
      },
    },
  });
  function showBody() {
    cardBody.children().show();
    cardBody.removeClass("hides");
  }
  function hideBody() {
    cardBody.children().hide();
    cardBody.addClass("hides");
  }
});
