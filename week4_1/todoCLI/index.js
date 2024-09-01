import fs from 'fs'
import {Command} from 'commander'

const program = new Command()

program
    .name('todo')
    .description('this is a basic todo')

program.command('add')
.argument('<string>')
.action((str)=>{
    if(!fs.existsSync('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json')){
        fs.appendFileSync('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json', JSON.stringify({todos: []})), 'utf-8', (err)=>{
            if(err){
                console.log(err)
                return
            }
        }
    }
    let todoItem = JSON.parse(fs.readFileSync('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json', 'utf-8'))
    
    const data = {
        id: (Math.random()),
        content: str,
        done: false
    }
    const todo = todoItem.todos.find(todo => todo.content === str);
    if(todo){
        console.log(`Todo ${str} already exists`)
        return
    }
    todoItem.todos.push(data)
    fs.writeFile('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json',
        JSON.stringify(todoItem),
        (err)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(`${str} added succesfully`)
        }
    )
})

program.command('delete')
.argument('<string>')
.action((str)=>{
    let todoItem = JSON.parse(fs.readFileSync('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json', 'utf-8'))
    let todos = todoItem.todos
    const todo = todoItem.todos.find(todo => todo.content === str);
    if(!todo){
        console.log(`Todo ${str} doesn't exists`)
        return
    }
    const newTodos = todos.filter((todo)=> todo.content !== str);
    todoItem["todos"] = newTodos

    fs.writeFile('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json',
        JSON.stringify(todoItem),
        (err)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(`${str} deleted succesfully`)
        }
    )
})

program.command('done')
.argument('<string>')
.action((str)=>{
    let todoItem = JSON.parse(fs.readFileSync('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json', 'utf-8'))
    const todo = todoItem.todos.find(todo => todo.content === str);
    if(!todo){
        console.log(`Todo ${str} doesn't exists`)
        return
    }
    const todoupdated = todoItem.todos.map((todo) => (todo.content === str) ? {...todo, done: !todo.done} : todo);
    // console.log(todoupdated)
    todoItem["todos"] = todoupdated

    fs.writeFile('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json',
        JSON.stringify(todoItem),
        (err)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(`${str} done`)
        }
    )
})

program.command('deleteAll')
.action(()=>{
    const resetTodo = {
        todos: []
    }
    fs.writeFile('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json',
        JSON.stringify(resetTodo),
        (err)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Delete all todos")
        }
    )
})

program.command('listAll')
.action(()=>{
    let todoItem = JSON.parse(fs.readFileSync('/Users/riyangaikwad/Desktop/Coding/Cohort3/week4_1/todoCLI/todo.json', 'utf-8'))
    const allTodos = todoItem.todos
    console.log(allTodos)
    
})

program.parse()