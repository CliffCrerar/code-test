(function(win,doc){

    console.log('problem 1')

    function changeDateFormat(dates) {
        // Write the code that goes here


        return dates
      }
      
      var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);
      for (let index = 0; index < dates.length; ++index) {
        console.log(dates[index]);
      }


})(window,document)