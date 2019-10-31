console.log('-------------------------------');
console.log('Toptal Codility - 31 Oct');
console.log('-------------------------------');

const run = 'p2';

const problems = {
    p1: function () {
        console.log('problem 1');

        const a = [0, 3, 3, 7, 5, 3, 11, 1];

        function solution(A) {
            // write your code in JavaScript (Node.js 8.9.4)
            A.length
            // console.log('A.length: ', A.length);
            let maxAdjLen;

            while (A.length !== 0) {
                let minVal = Math.min(...A);
                // console.log('minVal: ', minVal);
                let maxVal = Math.max(...A);
                // console.log('maxVal: ', maxVal);
                let thisAdjacent = maxVal - minVal;
                // console.log('thisAdjacent: ', thisAdjacent);
                if (thisAdjacent < maxAdjLen || maxAdjLen === undefined) {
                    maxAdjLen = thisAdjacent;
                }
                // console.log('maxAdjLen: ', maxAdjLen);
                A.splice(A.indexOf(minVal), 1);
                A.splice(A.indexOf(maxVal), 1);
                // console.log(A);
            }
            return maxAdjLen
        }
        console.log('solution(a): ', solution(a));


    },
    p2: function () {
        console.log('problem 2');

        /**
         * 
         * You want to spend your next vacation in a foreign country. In the summer you are free for N consecutive days. You have consulted Travel Agency and learned that they are offering a trip to some interesting location in the country every day. For simplicity, each location is identified by a number from 0 to N − 1. Trips are described in a non-empty array A: for each K (0 ≤ K < N), A[K] is the identifier of a location which is the destination of a trip offered on day K. Travel Agency does not have to offer trips to all locations, and can offer more than one trip to some locations.

        * You want to go on a trip every day during your vacation. Moreover, you want to visit all locations offered by Travel Agency. You may visit the same location more than once, but you want to minimize duplicate visits. The goal is to find the shortest vacation (a range of consecutive days) that will allow you to visit all the locations offered by Travel Agency.

        For example, consider array A such that:

            A[0] = 7
            A[1] = 3
            A[2] = 7
            A[3] = 3
            A[4] = 1
            A[5] = 3
            A[6] = 4
            A[7] = 1
        Travel Agency offers trips to four different locations (identified by numbers 1, 3, 4 and 7). The shortest vacation starting on day 0 that allows you to visit all these locations ends on day 6 (thus is seven days long). However, a shorter vacation of five days (starting on day 2 and ending on day 6) also permits you to visit all locations. On every vacation shorter than five days, you will have to miss at least one location.

        Write a function:

        function solution(A);

        that, given a non-empty array A consisting of N integers, returns the length of the shortest vacation that allows you to visit all the offered locations.

        For example, given array A shown above, the function should return 5, as explained above.

        Given A = [2, 1, 1, 3, 2, 1, 1, 3], the function should return 3. One of the shortest vacations that visits all the places starts on day 3 (counting from 0) and lasts for 3 days.

        Given A = [7, 5, 2, 7, 2, 7, 4, 7], the function should return 6. The shortest vacation that visits all the places starts on day 1 (counting from 0) and lasts for 6 days.

        Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [0..N − 1].
        
        Copyright 2009–2019 by Codility Limited. All Righ
         */

        const a = [7, 3, 7, 3, 1, 3, 4, 1];
        const b = [2, 1, 1, 3, 2, 1, 1, 3];
        const c = [7, 5, 2, 7, 2, 7, 4, 7];


        function solution(A) {
            // write your code in JavaScript (Node.js 8.9.4)
            const sites = [];
            const days = A.map((n, i) => ({ day: i, site: n }));
            // const orderedDays = days.sort((a,b)=>a.site-b.site)
            let i = 0;
            let iteration;
            let holidayLen;
            for (let i = 0; i < A.length; i++) {
                !sites.includes(A[i]) && sites.push(A[i]);
            }
            let possibleDays = sites.map(s => {
                return { site: s, possible: days.filter(e => e.site === s).length };
            })
            console.log('days: ', days);
            // console.log('orderedDays: ', orderedDays);
            console.log('possibleDays: ', possibleDays);
            iterations = A.length * sites.length;
            // console.log('iterations: ', iterations);
            while (iterations != i) {
                let min = Math.min(...possibleDays.map(d => d.possible));
                console.log('min: ', min);


                i++
                // console.log('i: ', i);
            }

            return 'unique'
        }

        console.log(solution(a));
        // console.log(solution(b));
        // console.log(solution(c));

    },
    p3: function () {
        console.log('problem 3');

        /**
         * Your server has received a package of N incoming requests. Handling the K-th request (for K from 0 to N − 1) will take A[K] seconds.

The load balancer has to drop two acquired requests and distribute the rest of them between three workers in such a way that each worker receives a contiguous fragment of requests to handle, and finishes handling them in exactly the same moment as the other workers. No two workers should receive the same request to compute.

The load balancer's distribution of requests is performed by selecting two requests that will be dropped, and which will split the array into three contiguous parts that will be allocated to the workers. More precisely, if requests 2 and 5 are chosen by the load balancer from a package of 9 requests, then:

the 0-th to 1-st requests will be handled by the first worker,
the 3-rd to 4-th requests will be handled by the second worker,
the 6-th to 8-th requests will be handled by the third worker.
Such a distribution will be correct if each worker receives requests equalling the same total amount of handling time.

Write a function solution that, given an array A of N integers representing the time of execution of consecutive tasks, returns true if it is possible for the load balancer to choose two requests that will determine an even distribution of requests among three workers, or false otherwise.

Examples:

1. Given A = [1, 3, 4, 2, 2, 2, 1, 1, 2], the function should return true, as choosing requests 2 and 5 results in a distribution giving 4 seconds of handling time to each worker, as explained in the following image:

The first worker will handle tasks with execution times 1 and 3, the second worker handles tasks with times 2 and 2
and the third worker handles tasks with times 1, 1 and 2. All workers will handle tasks with a total execution time of 4.

2. Given A = [1, 1, 1, 1, 1, 1], the function should return false.

                  |--|           
             |--| |--|           
             |--| |--| |--| |--| |--|           |--| 
        |--| |--| |--| |--| |--| |--| |--| |--| |--|

3. Given A = [1, 2, 1, 2, ..., 1, 2] of length 20,000, the function should return true.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [5..100,000];
each element of array A is an integer within the range [1..10,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure pro
         */

    },
    p4: function () {
        console.log('problem 4');
        /**
         * There is a board with 2 rows and N columns, represented by a matrix M. Rows are numbered from 0 to 1 from top to bottom and columns are numbered from 0 to N−1 from left to right. Each cell contains either a 0 or a 1. You know that:

the sum of integers in the 0-th (upper) row is equal to U,
the sum of integers in the 1-st (lower) row is equal to L,
the sum of integers in the K-th column is equal to C[K].
Your job is to recover M based on this information.

Write a function:

function solution(U, L, C);

that, given two integers U, L and an array C of N integers, as described above, returns a string describing the matrix M in the following format. The first part of the string should be the description of the upper row (N characters: 0 or 1), then there should be comma (,), and finally there should be the description of the lower row (N characters: 0 or 1.) The output string should not contain any whitespace.

If there exist multiple valid Ms, your function may return any one of them. If no valid M exists, your function should return the word IMPOSSIBLE.

Examples:

1. Given U = 3, L = 2, C = [2, 1, 1, 0, 1], your function may, for example, return 11001,10100 which describes the following board:
    0   1   2   3   4  
0 | 1 | 1 | 0 | 0 | 1 |
1 | 1 | 0 | 1 | 0 | 0 |

The picture describes the first example test.

2. Given U = 2, L = 3, C = [0, 0, 1, 1, 2], your function should return the word IMPOSSIBLE, because no matrix M satisfies such conditions.

3. Given U = 2, L = 2, C = [2, 0, 2, 0], your function should return 1010,1010, which describes the following board:

    0   1   2   3     
0 | 1 | 0 | 1 | 0 | 
1 | 1 | 0 | 1 | 0 | 

The picture describes the third example test.

Write an efficient algorithm for the following assumptions:

U and L are integers within the range [0..100,000];
N is an integer within the range [1..100,000];
each element of array C is an integer within the range [0..2].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
         */

    },
    p5: function () {
        console.log('problem 5');

    },
    p6: function () {
        console.log('problem 6');

    },
    p7: function () {
        console.log('problem 7');

    }

}

problems[run]();
console.log('-------------------------------');