$.get({
  url:
  success: function(mutants) {
    $.each(mutants, function(i, mutant) {
      $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
    });
  }
}):
//same exact thing as we did in xavierschool.js
