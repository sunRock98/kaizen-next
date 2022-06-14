import { useEffect, useRef } from "react"


export const useInterval = (cb, timeInterval) => {
    const cbRef = useRef();

    useEffect(() => {
        cbRef.current = cb;
    });

    useEffect(() => {
        let id = setInterval(() => {
            cbRef.current();
        }, timeInterval)
        return () => clearInterval(id);
    }, [timeInterval])


}