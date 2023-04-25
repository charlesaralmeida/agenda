import React from 'react'
import ListButtonWithIconAndLabel from 'components/lists/listButtonsWithIconAndLabel'
import useLogic from './useLogic'
import './style.css'

const ContainerListButtonsVehicleTypes = () => {
    const { getList, handleClick } = useLogic()

    return (
        <div
            role="list-button-with-icon-and-label"
            className="ListButtonWithIconAndLabelVehicleType"
        >
            <ListButtonWithIconAndLabel
                list={getList()}
                handleClick={handleClick}
            />
        </div>
    )
}

export default ContainerListButtonsVehicleTypes
