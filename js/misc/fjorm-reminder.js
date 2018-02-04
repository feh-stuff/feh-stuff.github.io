$(document).ready(function() {
  const code = 'fjorm-reminder';
  let times = JSON.parse(localStorage.getItem(code)) || 0;
  localStorage.setItem(code, times + 1);
  if (times % 7 !== 0) {
    return;
  }


  let $modal = $(`<div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" style="margin-top:10%;" role="document">
      <div class="modal-content">
        <div class="modal-header" style="border-bottom:0;">
          <h5 class="modal-title">Notification</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img class="w-100 mb-3" src="img/assets/fjorm-banner.png">
          <h4 class="text-center mb-4">Make 5★ Hero Fjorm an ally! Complete the first chapter of Book II!</h4>
          <p class="mb-0">Tried the first chapter of Book II yet?</p>
          <p>Complete it to get <span class="text-warning">Fjorm</span> as an ally!</p>
        </div>
        <div class="modal-footer" style="border-top:0;">
          <button type="button" id="close-reminder" class="btn btn-success btn-block" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`).appendTo('body');

  $modal.modal('show');
});
