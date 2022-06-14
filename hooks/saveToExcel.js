import XLSX from 'xlsx';

export const saveToExcel = ( data, filename ) => {


    const datePicker = (date) => {

        if (!date) {
            return '';
        }
        const a = new Date(date);
        return a.toLocaleString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })
    }
    const statusChanger = (status) => {
        switch (status) {
            case 'old':
                return 'Голосование завершено'

            case 'на голосовании':
                return 'На голосовании'

            case 'new':
                return 'Новое'


            default:
                break;
        }
    }
    const combedData = data.map(post => {
        return {
            'Дата создания кайдзен': datePicker(post['date']),
            'Автор': post['authorName'],
            'Соавтор': post['coauthor'],
            'Область применения': post['kaidzenArea'].join(', '),
            'Нынешнее состояние': post['todayState'],
            'Предложение для улучшения': post['proposal'],
            'Статус': statusChanger(post['status']),
            'Дата голосования': datePicker(post['voteDate']),
            'Принятое решение': post['voteDecision'],
        }
    });


    const wb = XLSX.utils.book_new();
    const ws_name = 'SheetJs'
    const ws = XLSX.utils.json_to_sheet(combedData);
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    return XLSX.writeFile(wb, filename);
}

