$(function() {
  // array to hold nested rows
  window.expandRowsArr = [];

  var inNested = false,
      mainRowID = 0;

  // add classes to main table
  $("table").addClass("table markdown-table table-striped table-bordered table-hover designTable").attr("id", "designTable").find('a').each(function() {
    $(this).attr('target','_blank');

  }).end().find('tr').each(function() {
    var $row = $(this);

    $row.find('td').each(function() {
      var $cell = $(this),
          text = $cell.text();

      // apply color to cells based on text
      text.match(/^Needs Updates$/i) && $cell.addClass('status orange');
      text.match(/^needs review$/i) && $cell.addClass('status red');
      text.match(/^UXD Verified$/i) && $cell.addClass('status green');
      text.match(/^Ready for Dev$/i) && $cell.addClass('status blue');
      text.match(/^In Progress$/i) && $cell.addClass('status light-blue');
      text.match(/^Not Yet Started$/i) && $cell.addClass('status purple');

      if ($cell.is(':nth-child(2)')) {
        if ($cell.text().match(/^version [0-9]*$/i)) {
          if (!inNested) {
            // add toggle button
            $row.prev('tr').find('td').first().wrapInner('<a role="button" class="toggle"></a>');
            //prepend('<a role="button" class="toggle"></a>');
            expandRowsArr[mainRowID] = '';
            inNested = true;
          }

          // stuff nested rows in an array and remove from document
          $row.addClass('nested');
          expandRowsArr[mainRowID] += $row.prop('outerHTML');
          $row.remove();
          
        } else {
          // give main rows an id
          mainRowID++;
          $row.attr('id', mainRowID);
          inNested = false;
        }
      }
    })
  })
})


