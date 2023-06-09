import React, { useState } from 'react';



const PersonCard = (props) => {
    const [state, setState] = useState({
        age: props.age
    })
    const AgeUp = () => {
        setState({
            age: state.age+1
        })
        console.log(state.age)
    }
    console.log(state)
return(
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>Age: {state.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {AgeUp}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard