const queue = []
queue.unshift(1)
queue.unshift(2)
queue.unshift(3)
queue.unshift(4)
queue.unshift(5)

console.log(queue)
console.log(queue.pop())
console.log(queue)
console.log(queue.pop())
console.log(queue)
console.log(queue.pop())

console.log('=====================================================')

const Fila = () =>{
    const data = []

    const add = (value)=>{
        data.unshift(value)

    }

    const remove = ()=>{
        if(data.lenght === 0){
            return -1
        }
        // const value = data[data.lenght -1]
        // data.splice(data.lenght-1, 1)
        // return value
        const value = data.pop()
        return value

    }

    const print = () =>{
        console.log(data)
    }

    return {
        add, remove, print
    }
}

const fila = Fila()
fila.add(1)
fila.add(2)
fila.add(3)
fila.add(4)

fila.print()
console.log(fila.remove())
fila.print()