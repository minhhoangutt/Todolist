export default function logger(reducer){
    return (prevState, action, args) => { 
        const nextState = reducer(prevState, action, args)
        console.group(nextState)
        console.log(prevState)
        console.log(action,args)

        
        return nextState
        console.groupEnd()

        }

}