
  const startPauseButton = document.querySelector('#start-pause-button')
        const w = document.querySelector('.grid')
        const b = document.querySelector('.b')

        let timerId
        let zm1 = 0 // 



        function funk1() {
            zm1++
            w.innerHTML = zm1
            console.log(timerId)

            if (zm1 == 6) {
                b.style.fontSize= '30px'
            }
            if (zm1 % 2 === 0) {
                b.style.background = 'red'
            } else {
                b.style.background = 'purple'

            }



            if (zm1 > 20) {
                clearInterval(timerId)
                w.innerHTML = 'koniec funk1'

            }
        }
