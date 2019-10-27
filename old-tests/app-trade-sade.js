console.log('-------------------------------');
console.log('Code Test - TradeSafe 22 Oct 19');
console.log('-------------------------------');

const run = 'p1';

const problems = {
    p1: function () {
        console.log('problem 1')

        function changeDateFormat(dates) {
            // Write the code that goes here
            const regExp = /^\d{2,4}(\/|-)\d{2}(\/|-)\d{2,4}$/
            const regExpG = /(-|\/)/
            const newArr = [];
            for (let i = 0; i < dates.length; i++) {
                if(dates[i].match(regExp)===null){
                    break;
                } else if (dates[i].match(regExp).length > 0) {
                    newArr.push(
                        fixFormat(
                            dates[i], 
                            regExpG.exec(dates[i])[0], 
                            regExpG.exec(dates[i]).index)
                    )
                }
            }
            function fixFormat(date, splitter, firstPos) {
                const spl = date.split(splitter);
                if(splitter==='-' && firstPos===2){
                    return `${spl[2]}${spl[0]}${spl[1]}`
                } else if (splitter==='/' && firstPos===2){
                    return `${spl[2]}${spl[1]}${spl[0]}`
                } else if(splitter==='/' && firstPos===4){
                    return spl.join('');
                }
            }
            return newArr
        }

        var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);
        for (index = 0; index < dates.length; ++index) {
            console.log(dates[index]);
        }
    },
    p2: function () {
        console.log('problem 2')
    },
    p3: function () {
        console.log('problem 3')
    },
    p4: function () {
        console.log('problem 4')
    },
    p5: function () {
        console.log('problem 5')
    },
    p6: function () {
        console.log('problem 6')
    },
    p7: function () {
        console.log('problem 7')
    }

}

problems[run]();
console.log('-------------------------------');