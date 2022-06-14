
import React from 'react';
import { saveToExcel } from '../hooks/saveToExcel';

 export  const SaveToExcelButton = ({ loading, data, filename }) => {
    const name = filename.includes('Invalid Date') ? 'голосование за все время.xlsx' : filename;
    
    const clickHandler = () => {
        saveToExcel(data, name);
    }

    return (
        <button
            onClick={clickHandler}
            className="btn waves-effect waves-light saveToExcelButton"
            type="submit"
            name="action"
            disabled={loading}>
            <span>Сохранить EXCEL</span>
        </button>
    )
}

export default SaveToExcelButton;