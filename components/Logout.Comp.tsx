import { useHistory } from "react-router-dom";
import React, { useCallback, useContext } from 'react';
import { AuthContext } from "./AuthContextProvider/AuthContext";
import { Button, Icon, Modal } from 'react-materialize';


export const LogoutComponent = () => {
    const { logout } = useContext(AuthContext);
    const history = useHistory();


    const logoutHandler = useCallback(async () => {
        await logout();
        history.push('/login');
    }, [history, logout])

    

    return (
        <Modal
            actions={[
                <Button
                    node="button"
                    style={{ marginRight: '5px' }}
                    waves="light"
                    modal="close"
                    onClick={logoutHandler}
                    >
                    
                    ВЫЙТИ
                    </Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Вы хотите выйти?"
            id="Modal-99"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            root={typeof window !== 'undefined' ? document.body : null}
            trigger={<Button
                className="black"
                floating
                icon={<Icon>logout</Icon>}
                large
                node="button"
                waves="light" />}
        />
    )
}

export default LogoutComponent;