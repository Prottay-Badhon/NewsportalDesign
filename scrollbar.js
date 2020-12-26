    
var $ = document.querySelector.bind(document);

      var x = 0;

      function addEntries() {
        for (var i = 0; i < 10; i++) {
          $('#container').innerHTML += '<div class="alert alert-info text-left m-4" style="width:400px;"><p class="lead">Fork & insert your content here.</p><p class="lead">  If you would like to download Perfect Scrollbar Package you can do it <a target="_blank" href="https://mdbootstrap.com/freebies/perfect-scrollbar/">here.</a></p><p class="lead">  If you would like to download Material Design for Bootstrap UI Kit you can do it <a target="_blank"    href="https://mdbootstrap.com/docs/jquery/getting-started/download/">here.</a></p></div>';
        }
      }

      addEntries();
      var ps = new PerfectScrollbar('#container');

      $('#container').addEventListener('ps-y-reach-end', function () {
        addEntries();
        ps.update();
      });