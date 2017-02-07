$('.button.first').on('click', function(e){
  e.preventDefault();
  $('.form').addClass('animate_out');
  $arr = $('form').serializeArray();
  $arr2 = [$arr.length];
  $.each($arr, function(i, field){
    $arr2[i] = field.value;
  });

  $cwp = ($arr2[0] * $arr2[1] * $arr2[2] * 7);
  $cmp = ($arr2[0] * $arr2[1] * $arr2[2] * 30);
  $cap = ($arr2[0] * $arr2[1] * $arr2[2] * 365);

  $owp = ($arr2[0] * $arr2[1] * $arr2[2] * 7 / 2);
  $omp = ($arr2[0] * $arr2[1] * $arr2[2] * 30 / 2);
  $oap = ($arr2[0] * $arr2[1] * $arr2[2] * 365 / 2);

  $swp = ($cwp - $owp);
  $smp = ($cmp - $omp);
  $sap = ($cap - $oap);

  setTimeout(function(){
    $('.cwp').html("You pay: $" + $cwp.toFixed(2));
    $('.owp').html("Our cost: $" + $owp.toFixed(2));
    $('.swp').html("Potential Savings: $" + $swp.toFixed(2));
    $('.cmp').html("You pay: $" + $cmp.toFixed(2));
    $('.omp').html("Our cost: $" + $omp.toFixed(2));
    $('.smp').html("Potential Savings: $" + $smp.toFixed(2));
    $('.cap').html("You pay: $" + $cap.toFixed(2));
    $('.oap').html("Our cost: $" + $oap.toFixed(2));
    $('.sap').html("Potential Savings: $" + $sap.toFixed(2));
    $('.form').removeClass('is_showing');
    $('.results').addClass('animate_in');
  }, 300);
});
