      // for (let i = 0; i <= goal; i++) {
        //     setTimeout(() => {
        //         countPlace.innerText = i;
        //         console.log(i / goal)
        //     }, i / goal * 5000);
        // }

        // let timer = 0;
        // let now = 0;
        // let count = 0;
        // while (true) {
        //     setTimeout(() => {
        //         countPlace.innerText = Number(countPlace.innerText) + parseInt(goal / (count + 2));
        //         console.log("실행!");
        //         console.log(parseInt(goal / (count + 2)))
        //         count++;
        //     }, timer);
        //     timer += 100;
        //     if (timer === 10000) {
        //         setTimeout(() => {
        //             countPlace.innerText = goal;
        //         }, timer);
        //         break;
        //     }
        // }




        function makeCountUp(target,goal,countDuration,framePerSec) {
            
            const 실행횟수 = countDuration * framePerSec / 1000;
            
            for (let i = 0; i < 실행횟수; i++) {
                
                const 진행도 = i / (실행횟수 - 1);
                setTimeout(() => {
                    target.innerText = parseInt(easeOutCubic(진행도) * goal).toLocaleString();
                }, (countDuration / 실행횟수) * (i + 1));
               
        }
         function easeOutCubic(x) {
            return 1 - Math.pow(1 - x, 3);
            }
        }
            
            //0,4 ->    0         
            //1,4 ->    0.25
            //2,4 ->    0.5
            //3,4 ->    0.75
            //4,4 ->    1
            
            //1일때 실행횟수 5번
            //2일때 실행횟수 10번
        //3일때 실행횟수 15번





        // 진행도를 0~1로 통제할수 있게 되었다
