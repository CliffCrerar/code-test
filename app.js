console.log('-------------------------------');
console.log('Code Test - IKM 27 Oct');
console.log('-------------------------------');

const run = 'p2';

const problems = {
    p1: function () {
        console.log('problem 1')
        var y;
        function modifyVariables(x) {
            var z = 5;
            x += 2;
            y += x + z;
        }

        var x = 1;
        var y = 2;
        var z = 3;
        modifyVariables(x);
        document.writeln(x);
        document.writeln(y);
        document.writeln(z);

    },
    p2: function () {
        console.log('problem 2')

        // var A = new Array(5);
        // var A = new Array("A", "2", "C");
        
        // var A = new A("A", "B", "C");

        // var A = new Array[];

        var A = Array(0, 1, 2);
        
        console.log('A: ', A);

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