import ContainerDateTime from 'components/containers/ContainerDateTime'
import styles from './.module.css'

const ContainerEstimatedTime = ({ handleChange, state }) => {
    return (
        <div className={styles.container_estimated_date_time}>
            <div>
                <div className={styles.container_input}>
                    <span>Chegada:</span>
                    <ContainerDateTime
                        handleChange={handleChange}
                        state={state}
                    />
                </div>
                <div className={styles.container_input}>
                    <span>Saída:</span>
                    <ContainerDateTime
                        handleChange={handleChange}
                        state={state}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContainerEstimatedTime
