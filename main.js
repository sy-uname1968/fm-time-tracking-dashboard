const pData = fetch("./data.json").then( result => {
    return result.json()
})

document.querySelectorAll(".period-view li").forEach( btn => {
    btn.addEventListener("click", async (e) => {
        if(e.target.matches(".period-view li.active")) {
            return
        }
        const data = await pData
        const currentActive = document.querySelector(".period-view li.active")
        currentActive.classList.toggle("active")
        e.target.classList.toggle("active")

        const timeframe = e.target.dataset.timeframe
        const last = e.target.dataset.last
        data.forEach(cardData => {
            const card = document.querySelector(`.life-aspect-card[data-title='${cardData.title}']`)
            const duration = card.querySelector(".duration")
            const refDuration = card.querySelector(".ref-duration")
            const ref = card.querySelector(".ref")

            duration.textContent = `${cardData.timeframes[timeframe].current}hrs`
            refDuration.textContent = `${cardData.timeframes[timeframe].previous}hrs`
            ref.textContent = `Last ${last} - `
        })

    })
})