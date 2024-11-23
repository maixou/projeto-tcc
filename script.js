document.querySelectorAll('.arrow-down').forEach(span => {
    span.addEventListener('click', function (evt) {
        
        const span = evt.target;
        const nomeSpan = span.innerText;
        const anchorClasses = span.parentNode.querySelectorAll('.anchor-classes');
        console.log(span)

        if (nomeSpan == 'Expandir') {
            span.innerText = 'Fechar';
            anchorClasses.forEach(div => {
                const anchorNode = div.querySelector('div');
                anchorNode.style.display = 'block'
            })
        } else {
            span.innerText = 'Expandir';
            anchorClasses.forEach(div => {
                const anchorNode = div.querySelector('div');
                anchorNode.style.display = 'none'
            })
        }
    })
})