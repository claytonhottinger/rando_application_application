/**
 * Created by chottinger on 12/5/15.
 */
$(function(){
  $('.app').on('submit',function(event){
    event.preventDefault();
    var data = {};
    var a = $(this).serializeArray()
    a.forEach(function(elem){
      if(elem.value != '') {
        data[elem.name] = elem.value;
      }
    });
    $.ajax({
      url: '/applicant',
      data: data,
      type: 'post'
    }).done(function(data){
      console.log(data);
    });
  });

});