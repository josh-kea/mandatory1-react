import { useState } from 'react';

export default function LightSwitch({ onLightChanged }) {
    const [lightSwitchState, setLightSwitchState] = useState("OFF");
    const [clickAmount, setClickAmount] = useState(0);

    function handleToggleSwitch() {
        const newLightSwitchStateCondition = lightSwitchState === "OFF" ? "ON" : "OFF";

        setLightSwitchState(newLightSwitchStateCondition);
        onLightChanged(newLightSwitchStateCondition);

        let newClickAmount = clickAmount;
        newClickAmount++;
        setClickAmount(newClickAmount);
        document.title = `You've clicked ${newClickAmount} times`;            
    }

    return (
        <>
            {lightSwitchState}
            <button onClick={handleToggleSwitch}>Hit the Switch</button>
        </>
    );
}


