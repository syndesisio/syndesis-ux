$(function() {
  $(document).on('click', '.toggle', function(e) {
    var $this = $(this),
        $parentRow = getParentRow($this);

    if ($this.hasClass('open')) {
      collapseRow($parentRow);
    } else {
      expandRow($parentRow);
    }

  })
})
