// pages changes
function showVisitorPage() {
  console.log('1');
  $('#respuestaPage').hide();
  $('#registroPage').show();
  $('#adminPage').hide();
  $('#tablePage').hide();
}
function showResponsePage() {
  console.log('2');
  $('#respuestaPage').show();
  $('#registroPage').hide();
  $('#tablePage').hide();
  $('#adminPage').hide();
}
function showAdminPage() {
  console.log('3');
  $('#respuestaPage').hide();
  $('#registroPage').hide();
  $('#tablePage').hide();
  $('#adminPage').show();
}
function showTablePage() {
  console.log('3');
  $('#respuestaPage').hide();
  $('#registroPage').hide();
  $('#adminPage').hide();
  $('#tablePage').show();
}