import DateInput from '../../inputs/DateInput'
import TimeInput from '../../inputs/TimeInput'
import './style.css'

const ContainerDateTime = ({ handleChange, state }) => {
    return (
        <div role="container-date-time" className="container-date-time">
            <div className="container-date-time-input">
                <div role="date-input-container">
                    <DateInput
                        handleChange={handleChange}
                        keyValue={'date'}
                        value={state.date}
                    />
                </div>
                <div role="time-input-container">
                    <TimeInput
                        handleChange={handleChange}
                        keyValue={'time'}
                        value={state.time}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContainerDateTime
