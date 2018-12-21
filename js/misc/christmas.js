$(document).ready(function() {
  const today = new Date();
  const code = 'christmas' + today.getFullYear();
  const isChristmas = today.getDate() === 25 && today.getMonth() === 11;

  if (JSON.parse(localStorage.getItem(code)) && !isChristmas) {
    return;
  }

  let $modal = $(`<div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" style="margin-top:10%;" role="document">
      <div class="modal-content bg-danger text-white">
        <div class="modal-header" style="border-bottom:0;">
          <h5 class="modal-title">Merry Christmas!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-around">
          <div class="text-center">
            <img src="../img/assets/orbs.png">
            <h2>1</h2>
          </div>
          <div class="text-center">
            <img src="../img/assets/feather.png">
            <h2>100</h2>
          </div>
        </div>
        <div class="modal-footer" style="border-top:0;">
          <button type="button" id="accept-all" class="btn btn-success btn-block" data-dismiss="modal">Accept All</button>
        </div>
      </div>
    </div>
  </div>`).appendTo('body');

  $modal.modal('show');
  $modal.on('click', '#accept-all', function() {
    localStorage.setItem(code, 'true');
  });
});
