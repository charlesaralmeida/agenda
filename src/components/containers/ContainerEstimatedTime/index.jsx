import QuantityTimeInput from '../../inputs/QuantityTimeInput'
import QuantityDayInput from '../../inputs/QuantityDayInput'
import HourOrDaySelect from 'components/inputs/HourOrDaySelect'
import './style.css'

const ContainerEstimatedTime = ({ handleChange, state }) => {
    return (
        <div
            role="container-estimated-date-time"
            className="container-estimated-date-time"
        >
            <span role="container-adress-label">
                Tempo estimado de permanência
            </span>
            <div
                className="container-estimated-date-time-input"
                role="container-estimated-date-time-input"
            >
                <div
                    role="container-quantity-time-input"
                    className="container-estimated-quantity-time-input"
                >
                    {state.editing.estimatedTimeType === 'Horas' ? (
                        <QuantityTimeInput
                            handleChange={handleChange}
                            keyValue={'estimatedTime'}
                            value={state.editing.estimatedTime}
                        />
                    ) : (
                        <QuantityDayInput
                            handleChange={handleChange}
                            keyValue={'estimatedDays'}
                            value={state.editing.estimatedDays}
                        />
                    )}
                </div>
                <div
                    role="hour-or-day-select-container"
                    className="container-hour-or-day-select"
                >
                    <HourOrDaySelect
                        handleChange={handleChange}
                        keyValue={'estimatedTimeType'}
                        value={state.editing.estimatedTimeType}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContainerEstimatedTime
