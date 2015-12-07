/**
 * Created by chottinger on 12/6/15.
 */
$(function(){
  $('.search').on('submit',function(event){
    event.preventDefault();
    var tempArray = $(this).serializeArray();
    var search = '?';
    //var link = tempArray.shift().value;
    tempArray.forEach(function(elem){
      if(elem.value != '') {
        search += elem.name + '=' +  elem.value + '&';
      }
    });
    search = search.slice(0, -1);
    $.ajax({url:'/admin/search' + search}).done(function(data){
      $('.data').remove();
      data.forEach(function(elem){
        var $tr = $('<tr>');
        $tr.addClass('data');
        $tr.append($('<td>' + elem.firstname + '</td>'));
        $tr.append($('<td>' + elem.lastname + '</td>'));
        $tr.append($('<td>' + elem.desiredloc + '</td>'));
        $tr.append($('<td>' + elem.employer1 + '</td>'));
        $tr.append($('<td>' + elem.skills + '</td>'));
        $('table').append($tr);
      });
    });
  });


});