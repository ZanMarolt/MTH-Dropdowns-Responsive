$(document).ready(function() {
  $(".js-example-basic-single").select2({
  placeholder: "Start typing...",
});
  $(".js-example-basic-multiple").select2({
  tags: false,
  placeholder: "Start typing...",
  allowClear: true
});
});