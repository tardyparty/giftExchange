import React, { useContext, useEffect, useState, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as Reducer1 from '../store/reducers/plain_reducer';
import Context from '../utils/context';


const HooksContainer1 = () => {
    const context = useContext(Context);

    const [value, setValue] = useState(null);

    const [useEffectValue, setUseEffectValue] = useState(null);

    const [state, dispatch] = useReducer(Reducer1.Reducer1, Reducer1.initialState);

    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000);
    }, [value])

    const incrementValue = () => {
        setValue(value + 1)
    }

    const decrementValue = () => {
        setValue(value - 1)
    }

    const handleuseEffectValue = () => {
        setUseEffectValue("some string")
    }

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }

    return (
        <div>
            <div>
                <button onClick={() => handleuseEffectValue()}> Handle Value </button>
                <button onClick={() => handleDispatchTrue()}> Dispatch True </button>
                <button onClick={() => handleDispatchFalse()}> Dispatch False </button>
                <button onClick={() => context.dispatchContextTrue()}> Dispatch Context True </button>
                <button onClick={() => context.dispatchContextFalse()}> Dispatch Context False </button>
                <button onClick={() => incrementValue()}> Add Local Value </button>
                <button onClick={() => decrementValue()}> Dec Local Value </button>
                <br />
                <br />
                {context.useContextSubmitState
                 ? <h3> {context.useContextSubmitState} </h3>
                 : <h3> No User Text </h3>
                }
                <br />
                {context.stateProp2
                 ? <p> stateProp2 is true </p>
                 : <p> stateProp2 is false </p>
                }
                <br />
                {useEffectValue
                 ? <p> {useEffectValue} </p>
                 : <p> No value </p>
                }
                <br />
                <p>Local Value: {value} </p>
                <br />
                <br />
            </div>
        </div>
    )
}


export default HooksContainer1;
