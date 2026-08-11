document.addEventListener('DOMContentLoaded', function () {
  var filterBar = document.querySelector('.tag-filter');
  if (filterBar) {
    var active = new Set();
    var buttons = filterBar.querySelectorAll('button');
    var items = document.querySelectorAll('.pub-item, .wp-item');
    var workingPapers = document.querySelector('.working-papers');
    var dissertationHeading = document.getElementById('dissertation-heading');

    function applyFilter() {
      items.forEach(function (item) {
        if (active.size === 0) {
          item.style.display = '';
          return;
        }
        var tags = (item.getAttribute('data-tags') || '').split(',');
        var match = tags.some(function (t) { return active.has(t); });
        item.style.display = match ? '' : 'none';
      });
      if (workingPapers) {
        var anyVisible = Array.prototype.some.call(
          workingPapers.querySelectorAll('.wp-item'),
          function (wp) { return wp.style.display !== 'none'; }
        );
        workingPapers.style.display = anyVisible ? '' : 'none';
      }
      if (dissertationHeading) {
        var dissItem = dissertationHeading.nextElementSibling;
        dissertationHeading.style.display = (dissItem && dissItem.style.display !== 'none') ? '' : 'none';
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tag = btn.getAttribute('data-tag');
        var allBtn = filterBar.querySelector('[data-tag="all"]');

        if (tag === 'all') {
          active.clear();
          buttons.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          applyFilter();
          return;
        }

        if (active.has(tag)) {
          active.delete(tag);
          btn.classList.remove('active');
        } else {
          active.add(tag);
          btn.classList.add('active');
        }
        if (allBtn) allBtn.classList.toggle('active', active.size === 0);
        applyFilter();
      });
    });
  }

  document.querySelectorAll('.pub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.pub-item');
      var blurb = item && item.querySelector('.pub-blurb');
      if (!blurb) return;
      var open = blurb.classList.toggle('open');
      btn.textContent = open ? 'hide description' : 'nutshell description';
    });
  });
});
