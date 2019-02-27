$(document).ready(function() {
  const code = 'roy-prompt';
  let times = JSON.parse(localStorage.getItem(code)) || 0;
  localStorage.setItem(code, times + 1);
  if (times % 7 !== 0 || new Date() > new Date('Mar 06, 2019')) {
    return;
  }


  let $modal = $(`<div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" style="margin-top:5%;" role="document">
      <div class="modal-content" style="position:relative">
        <img id="img" src="../img/misc/roy-prompt1.jpg" style="width:100%;">
        <button type="button" id="next-prompt" class="btn btn-danger" style="position:absolute; right: 10px; bottom: 10px; min-width: 200px;">What is it?</button>
        <button type="button" id="close-prompt" class="btn btn-danger" style="position:absolute; right: 10px; bottom: 10px; min-width: 200px; display: none;" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>`).appendTo('body');

  setTimeout(function() {
    $modal.modal('show');
  }, 10000);

  $('#next-prompt').click(function(ev) {
    $(this).hide();
    $('#img').attr('src', '../img/misc/roy-prompt2.jpg');
    $('#close-prompt').show();
  });
});
