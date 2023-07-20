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