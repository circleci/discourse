import { acceptance } from "helpers/qunit-helpers";
acceptance("User Directory");

test("Visit Page", function() {
  visit("/u");
  andThen(() => {
    ok($('body.users-page').length, "has the body class");
    ok(exists('.directory table tr'), "has a list of users");
  });
});

test("Visit All Time", function() {
  visit("/u?period=all");
  andThen(() => {
    ok(exists('.time-read'), "has time read column");
  });
});
