//LIFO - Last in first out - O PRIMEIRO QUE ENTRA EH O PRIMEIRO QUE SAI;

const vetor = []
vetor.push(1)
vetor.push(2)

console.log(vetor)
console.log(vetor.pop())
console.log(vetor)



console.log('===============================================================================')


const Stack = () =>{
    const data = []
    let top = -1

    const push = (value)=>{
        top++
        data[top] = value;
        console.log(data)
    }
    return {
        push
    }
}

const stack1 = Stack()
stack1.push(1)
stack1.push(2)