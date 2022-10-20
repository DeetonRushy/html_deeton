document.addEventListener('DOMContentLoaded', function(_, _) {
    const input = document.getElementById('todo-list-input')
    const button = document.getElementById('todo-list-add')
    const remove = document.getElementById('todo-list-clear')

    button.addEventListener('click', () => {
        const list = document.getElementById('todo-list')
        const item = document.createElement('li')
        if (input.value === ''){
            return
        }

        if (input.value.includes('<') || input.value.includes('>')){
            // doesnt really protect from anything, but i think its funny
            input.value = 'nice try 🤡'
        }
        item.id = `__tdlitem${list.childNodes.length}`
        item.innerHTML = input.value

        const complete = document.createElement('input')
        complete.type = 'checkbox'
        complete.id = `__checkbox${list.childNodes.length}`

        complete.addEventListener('click', (event) => {
            const button = document.getElementById(event.target.id)
            const parent = document.getElementById(event.target.id.replace("__checkbox", "__tdlitem"))

            if (button.checked){
                parent.style.textDecoration = 'line-through'
            }
            else{
                parent.style.textDecoration = ''
            }
        })

        item.appendChild(complete)
        list.appendChild(item)
        input.value = ''
    })

    remove.addEventListener('click', () => {
        const list = document.getElementById('todo-list')
        list.innerHTML = ''
    })
})