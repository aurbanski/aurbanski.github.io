$('.button.first').on('click', function(e){
  e.preventDefault();
  $('.form').addClass('animate_out');
  $arr = $('form').serializeArray();
  $arr2 = [$arr.length];
  $.each($arr, function(i, field){
    $arr2[i] = field.value;
  });

  $cwp = ($arr2[0] * $arr2[1] * $arr2[2] * 7).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  $cmp = ($arr2[0] * $arr2[1] * $arr2[2] * 30).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  $cap = ($arr2[0] * $arr2[1] * $arr2[2] * 365).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

  $owp = ($arr2[0] * $arr2[1] * $arr2[2] * 7 / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  $omp = ($arr2[0] * $arr2[1] * $arr2[2] * 30 / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  $oap = ($arr2[0] * $arr2[1] * $arr2[2] * 365 / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

  $swp = ($cwp - $owp).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  $smp = ($cmp - $omp).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  $sap = ($cap - $oap).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

  setTimeout(function(){
    $('.cwp').html("You pay: $" + $cwp);
    $('.owp').html("Our cost: $" + $owp);
    $('.swp').html("Potential Savings: $" + $swp);
    $('.cmp').html("You pay: $" + $cmp);
    $('.omp').html("Our cost: $" + $omp);
    $('.smp').html("Potential Savings: $" + $smp);
    $('.cap').html("You pay: $" + $cap);
    $('.oap').html("Our cost: $" + $oap);
    $('.sap').html("Potential Savings: $" + $sap);
    $('.form').removeClass('is_showing');
    $('.results').addClass('animate_in');
  }, 300);
});
