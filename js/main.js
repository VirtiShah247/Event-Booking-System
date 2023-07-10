$("#next-trigger").click(function(){
  $('#loginModal').modal('hide');
  $('#registerModal').modal('show');
});


$("#back-trigger").click(function(){
  $('#registerModal').modal('hide');
  $('#loginModal').modal('show');
})
