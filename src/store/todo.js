import { observable } from 'mobx'

const todoStore = observable({
    state: [{
        text: 'Use Mobx',
        completed: false,
        id: 0
    }],
    addTodo() {
        
    }
})