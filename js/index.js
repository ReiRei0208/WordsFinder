$(document).ready(function() {

  var jobCount = $('#list .in').length;
  $('.list-count').text('共 ' + jobCount + ' 个词汇');
    
  
  $("#search-text").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    
    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 0);
    });
    
    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $('#list .in').length;
    $('.list-count').text('共 ' + jobCount + ' 个词汇');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
    
  });
               
});