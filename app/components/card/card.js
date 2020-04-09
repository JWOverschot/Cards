window.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
        let card = e.target

        card.classList.add('card-flip')

        const animationDuration = getComputedStyle(card).animationDuration
        setTimeout(() => {
            card.classList.remove('card-back')
            card.style.backgroundImage = 'url(../../storage/images/card2.png)'
            card.getElementsByTagName('p')[0].innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue erat augue, eu lobortis enim pharetra eu. Sed in mi arcu. Morbi elementum nisl nulla, id facilisis nisl porttitor non. Ut dolor diam, congue eu dignissim a, congue sit amet felis. Aenean pulvinar elit et nunc euismod efficitur. Sed lacinia sed purus vitae rhoncus. Mauris aliquam velit vel sem hendrerit, in vestibulum erat congue. Donec sit amet dui nec lorem sollicitudin consequat. Sed malesuada bibendum efficitur. Duis interdum risus neque, non gravida sem molestie et. Sed blandit quam diam, quis mollis urna sagittis a.'
            card.getElementsByTagName('p')[0].classList.remove('hidden')
        }, animationDuration.includes('ms') ? parseFloat(animationDuration) / 2 : (parseFloat(animationDuration) * 1000) / 2)
    }
})