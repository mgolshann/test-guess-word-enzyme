import React from 'react'

const Congrats = (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <div data-test="congrats-message">
                    Congratulations! You guessed the word!
                </div>
            </div>
        )
    } else {
        return (<div data-test="component-congrats">
                <div data-test="congrats-message"></div>
        </div>)
    }
}

export default Congrats
