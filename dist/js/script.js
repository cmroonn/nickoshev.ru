'use strict';

document.addEventListener('DOMContentLoaded', function () {
  {
    var loader = document.getElementById('loading');
    setTimeout(function () {
      loader.classList.add('hide');
      setTimeout(function () {
        return loader.classList.add('d-none');
      }, 300);
    }, 2000);
  }
});