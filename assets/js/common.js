function getParentRow($el) {
  return $el.closest('tr');
}

function expandRow($mainRow) {
  $mainRow.find('.toggle').addClass('open').end()
          .after(expandRowsArr[$mainRow.attr('id')]);
}

function collapseRow($mainRow) {
  $mainRow.find('.toggle').removeClass('open').end()
          .nextUntil('tr:not(.nested)').remove();
}
