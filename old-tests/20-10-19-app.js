console.log('code test');
// ['aaa','abccba','daata']
false && problem1();
false && problem2();
false && problem3();
true && ['daata'].forEach(i => palindromes(i));
false && exercise2();

function problem1() {

    console.log('problem 1');
};

function problem2() {

    console.log('problem 2');
};

function problem3() {

    console.log('problem 3');
};

function palindromes(e) {
    let arrLen;
    let palindromes = e.split("").map((letter, i, arr) => {
        arrLen = e.length;
        return arr[arrLen - i - 1]
    });
    let p = palindromes.join('');



    let s_start = 0;
    let s_end = 1;

    let len = e.length;
    let run = true;
    let checks = 0;
    let i = 0;
    let matchCount = [];
    while (run) {

        // let s1 = e.substring(s_Start,s_Length);
        // console.log('s1: ', s1);
        // let s2 = p.substring(s_Length-len,s_Length); 
        // console.log('s2: ', s2);

        let s1;



        switch (checks) {
            
            case 0: if (s_length > e.s_end) {
                checks++
            } else {
                s_start++, s_length;
            };break;
            case 1: '';
                break;
            case 3: '';
                break;
        }
        console.log('checks: ', checks);
        console.log('s1: ', s1);

        for()


        // if(e.includes(s)){
        //     matchCount.push(s);
        // }

        //if(len===e.length || start > len){checks++;}

        i++
        i === 20 && (run = false);
    }

    console.log('matchCount: ', matchCount);
    process.stdout.write(matchCount.length.toString() + '\n');
}

function exercise2() {
    process.stdin.on('data', function (data) {
        process.stdout.write((data.toString().trim() === 'exit').toString() + '\n');
        data.toString().trim() === 'exit' && process.exit(0);
    })
}

/**
 *
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
      let chunk;
      // Use a loop to make sure we read all available data.
      while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data: ${chunk}`);
      }
    });

    process.stdin.on('end', () => {
      process.stdout.write('end');
    });
 */