// load global variables

$(function () {
  $('#includedHeader').load('../site/header.html');
});
window.onload = function () {
  document.title = g.courseMaterials;
  document.getElementById('g_otherUnofficial').innerHTML = g.otherUnofficial;
  document.getElementById('g_prepare').innerHTML = g.prepare;
  document.getElementById('g_teach').innerHTML = g.teach;
  document.getElementById('g_ponder').innerHTML = g.ponder;
  document.getElementById('g_w02').innerHTML = g.w02;
};
