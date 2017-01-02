/*
   Your Name: Fabio Carriel Fonseca
   Script Date: Feb 11 2014
   JavaScript and Ajax -  Assignment 01
*/
/*
   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.
*/

       function addTime(oldTime, milliseconds) {
            var newTime = new Date();
            var newValue = oldTime.getTime() + milliseconds;
            newTime.setTime(newValue);
            return newTime;
       }
/*
   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/
	  
      function showTime(time) {            
            var theHour = time.getHours();
            var theMinutes = time.getMinutes();
            if (theHour < 12) {
                period = "AM";
            }
            else {
                period = "PM";
                theHour = theHour - 12;
            }
			
			if (theMinutes < 10) {
                minutesText = "0" + theMinutes;
            }
            else {
                minutesText = theMinutes;
            }		
            return (theHour + ":" + minutesText + " " + period);
        }	






