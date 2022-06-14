import React, { useEffect, useState } from "react";
import { Checkbox } from "react-materialize";

export const KaidzenAreaCheckbox2 = ({ kaidzenArea, area, changeHandlerFromParent }) => {
    const [checked1, setChecked] = useState(false);
    const checkboxChangeHandler = (event) => {
        event.persist();
        setChecked(prev => !prev);
        changeHandlerFromParent(event.target.value);
    };

    useEffect(() => {
        kaidzenArea && setChecked(false);
    }, [kaidzenArea])


    return (
        <p className="col xl4 l6 m6 s12" style={{
            marginLeft: 'auto',
            left: 'auto',
            right: 'auto'
        }}>
            <Checkbox
                name="kaidzenArea[]"
                label={area}
                value={area}
                className="pink darken-3"
                id={`checkbox_${area}`}
                checked={checked1}
                onChange={checkboxChangeHandler}
            />
        </p>
    )
}