
/* CODE SECTION 1 */

(function (win, doc) {

    $('document').ready(function () {
        console.log('Document Ready');


        // function checkSSNumA(strObj) {
        //     var ssn = document.getElementById("txtSSNum").value;
        //     var pattern = /^\d{3}-\d{2}-\d{4}$/;
        //      if (ssn.match(pattern))
        //          return true;
        //      else {
        //         alert("InValid SS Number");
        //      }
        //      return false;
        //   }

        //   function checkSSNumB(strObj) {
        //     var ssn = document.getElementById("txtSSNum").value;
        //     var pattern = /^\d{3}-\d{2}-\d{4}$/;
        //      if (ssn.match(pattern))
        //          return true;
        //      else {
        //         alert("InValid SS Number");
        //         return false;
        //      }
        //   }

        function checkSSNumC(strObj) {
            var ssn = document.getElementById("txtSSNum").value;
            var pattern = /\b\d{3}-\d{3}-\d{4}$/;
             if (ssn.match(pattern))
                 return true;
             else {
                alert("InValid SS Number");
                return false;
             }
          }

          var a = checkSSNumC('111-11-2123')
          console.log('a: ', a);

    })


})(window, document)