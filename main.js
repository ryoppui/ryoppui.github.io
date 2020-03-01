$(function() {

  // モーダル
  $('.tomodachi-btn').click(function() {
    $('#tomodachi-modal').fadeIn();
  });

  $('.close-mordal-btn').click(function() {
    $('#tomodachi-modal').fadeOut();
  });

  // バリエーション
  const MSG_EMPTY = 'ニュウリョク ヒッス ダヨ';
  const MSG_MAIL = 'メール ケイシキ ジャ ナイヨ';
  const MSG_PASS = 'ハンカクエイスウジ デ ニュウリョク シテネ';

  $('.valid-mail').keyup(function() {

    var form_g = $(this).closest('.form-group');

    if ($(this).val().length === 0) {
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMPTY);
    } else if (!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_MAIL);
    } else {
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.error-msg').text('');
    };
  });

  $('.varid-password').keyup(function() {

    var form_g = $(this).closest('.form-group');

    if ($(this).val().length === 0) {
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_EMPTY);
    } else if (!$(this).val().match(/^[0-9a-zA-Z]*$/)) {
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.error-msg').text(MSG_PASS);
    } else {
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.error-msg').text('');
    };
  });

  $('.faq-list-item').click(function() {

    var $kotae = $(this).find('.kotae');

    if ($kotae.hasClass('open')) {
      $kotae.removeClass('open').slideUp();
      $(this).find('span').text('+');
    } else {
      $kotae.addClass('open').slideDown();
      $(this).find('span').text('ー');
    };
  });




});
