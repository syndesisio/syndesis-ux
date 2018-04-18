$(function() {
  var $rows = $('tbody > tr'),
      $designLinks = $('tbody > tr > td:first-child > a'),
      hasToggle = false,
      count = 0;

  $("table").addClass("table markdown-table table-bordered table-hover").attr("id", "designTable");
  $("table>tbody>tr>td>a").attr("target", "_blank");
  $("table>tbody>tr>td:contains('Needs Updates')").addClass("status orange");
  $("table>tbody>tr>td:contains('Needs Review')").addClass("status red");
  $("table>tbody>tr>td:contains('UXD Verified')").addClass("status green");
  $("table>tbody>tr>td:contains('Ready for Dev')").addClass("status blue");
  $("table>tbody>tr>td:contains('In Progress')").addClass("status light-blue");
  $("table>tbody>tr>td:contains('Not Yet Started')").addClass("status purple");

  // hide rows with design links that start with v[0-9]
  $designLinks.each(function() {
    var $this = $(this);
    if ($this.text().match(/^v[0-9]* - /i)) {
      var $parentRow = $this.closest('tr');
      $parentRow.addClass('nested hidden');
    }
  })

  $rows.each(function() {
    var $this = $(this),
        $prevRow = $this.prev('tr');
    if ($this.hasClass('nested')) {
      if (!hasToggle) {
        $prevRow.find('td').first().prepend('<a role="button" class="toggle">+</a> ');
        hasToggle = true;
      }
      $prevRow.hasClass('stripe') && $this.addClass('stripe');
    } else {
      if (count % 2 == 1) {
        $this.addClass('stripe');
      }
      count++;
      hasToggle = false;
    }
  })

  $('.toggle').on('click',function(e) {
    $(this).closest('tr').nextUntil('tr:not(.nested)').toggleClass('hidden');
  })
})
