import { Modal, Button, Icon, Checkbox, TextInput, Textarea } from 'react-materialize';
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook'
import { KaidzenAreaCheckbox2 } from './KaidzenAreaCheckbox2';



export const AddNewProposalModal = ({ onAdd }) => {
    const [proposalForm, setProposalForm] = useState({
        todayState: "",
        proposal: "",
        kaidzenArea: [],
        uploads: [],
        coauthor: "",
    });

    const message = useMessage();
    const { loading, error, request, clearError } = useHttp();

    useEffect(() => {
        message(error, 'red');
        clearError();
    }
        , [error, message, clearError, setProposalForm])

    const changeHandler = event => {
        setProposalForm({ ...proposalForm, [event.target.name]: event.target.value })
    }

    const kaidzenAreaList = ["Качество продукции", "Удовлетворенность клиента", "Стоимость", "Увеличение продаж",
        "Беспорядок", "Здоровье и безопасность", "Производительность", "Черезмерные запасы", "Окружающая среда"];


    const checkboxChangeHandlerFromParent = (value) => {
        const areas = proposalForm.kaidzenArea.filter(el => el !== value);
        if (areas.length < proposalForm.kaidzenArea.length) {
            setProposalForm(prev => ({ ...prev, "kaidzenArea": areas }));
            return;
        } else {
            setProposalForm(prev => ({ ...prev, "kaidzenArea": [...areas, value] }));
        }
    }

    const formSendClickHandler = async () => {
        if (proposalForm.proposal === '') {
            message('Я не вижу вашего предложения. Пожалуйста, заполните поле предложение по улучшению', 'red');
            return;
        }
        try {
            const proposalForm2 = {
                ...proposalForm,
                todayState: removeTags(proposalForm.todayState),
                proposal: removeTags(proposalForm.proposal),
                coauthor: removeTags(proposalForm.coauthor),
            };
            const resp = await request('/api/post', 'POST', proposalForm2);
            const newPost = resp.data;
            onAdd(newPost);

            message('Ваше предложение принято. Вы лучший!', 'green');
            setProposalForm({
                todayState: "",
                proposal: "",
                kaidzenArea: [],
                uploads: [],
                coauthor: "",
            });
        } catch (e) { }
    }

    const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

    const tagOrComment = new RegExp(
        '<(?:'
        // Comment body.
        + '!--(?:(?:-*[^->])*--+|-?)'
        // Special "raw text" elements whose content should be elided.
        + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
        + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
        // Regular name
        + '|/?[a-z]'
        + tagBody
        + ')>',
        'gi');

    function removeTags(html) {
        let oldHtml;
        do {
            oldHtml = html;
            html = html.replace(tagOrComment, '');
        } while (html !== oldHtml);
        return html.replace(/</g, '&lt;');
    }





    return (
        <Modal
            actions={[
                <Button
                    node="button"
                    disabled={loading}
                    style={{ marginRight: '5px' }}
                    waves="light"
                    modal="close"
                    className="pink darken-3"
                    onClick={(e) => { formSendClickHandler(); }}>
                    Отправить
                    </Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header={null}
            id="Modal-7"
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
                className="red"
                floating
                icon={<Icon>add</Icon>}
                large
                node="button"
                waves="light"
            />}
        >
            <div>
                <div className='center'>
                    <h4>КАЙДЗЕН предложение</h4>
                </div>
                {/* <div className="input-field">
                    <textarea onChange={changeHandler}
                        value={proposalForm.todayState}
                        name='todayState'
                        id="todayState"
                        className=" materialize-textarea" />
                    <label htmlFor="todayState">Нынешнее состояние</label>
                </div> */}
                <Textarea
                    id="todayState"
                    label="Нынешнее состояние"
                    name="todayState"
                    onChange={changeHandler}
                    value={proposalForm.todayState}
                    xl={12}
                    s={12}
                />
                {/* <div className="input-field">
                    <textarea onChange={changeHandler}
                        value={proposalForm.proposal}
                        name='proposal'
                        id="proposal"
                        className="materialize-textarea" />
                    <label htmlFor="proposal">Предложение для улучшения</label>
                </div> */}
                <Textarea
                    id="proposal"
                    label="Предложение для улучшения"
                    name="proposal"
                    onChange={changeHandler}
                    value={proposalForm.proposal}
                    xl={12}
                    s={12}
                />
                {/* <div className="input-field">
                    <textarea onChange={changeHandler}
                        value={proposalForm.coauthor}
                        name='coauthor'
                        id="coauthor"
                        className=" materialize-textarea" />
                    <label htmlFor="coauthor">Соавтор предложения</label>
                </div> */}
                <TextInput
                    id="coauthor"
                    label="Соавтор предложения"
                    name="coauthor"
                    onChange={changeHandler}
                    value={proposalForm.coauthor}
                    xl={12}
                    s={12}
                />
                <h6> К какой области относятся ваши предложения по улучшению? </h6>
                <div className="row">
                    {kaidzenAreaList.map(area => (
                        <KaidzenAreaCheckbox2 key={area}
                            kaidzenArea={proposalForm.kaidzenArea.length === 0}
                            changeHandlerFromParent={checkboxChangeHandlerFromParent}
                            area={area} />
                    )
                    )}
                </div>
                <StyledDropzone setProposalForm={setProposalForm} empty={proposalForm.uploads.length === 0} />
            </div>



        </Modal>
    )
}





const getDashed = (props) => {
    if (props.isDragAccept) {
        return 'solid';
    }
    if (props.isDragReject) {
        return 'dashed';
    }
    if (props.isDragActive) {
        return 'dashed';
    }
    return 'dashed';
}

const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #d81b60; 
  border-style: ${props => getDashed(props)};
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  width: 100%;
`;


const thumb = {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '16px',
    minHeight: '100px',
    borderRadius: '20px',
};

const thumbInner = {
    borderRadius: '20px',
    overflow: 'hidden',
    width: '120px',
    height: '120px',
    position: 'relative',
    display: 'block',
    zIndex: 10,

};

const imgStyles = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

function StyledDropzone({ setProposalForm, empty }) {


    const [files, setFiles] = useState([]);
    const [uploadsUrl, setUploadUrls] = useState([]);
    const { isDragActive,
        isDragAccept,
        isDragReject,
        getRootProps,
        getInputProps } = useDropzone({
            accept: 'image/*, video/*, application/msword, application/vnd.ms-powerpoint, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

            onDrop: async acceptedFiles => {
                setFiles(prev => [...prev, ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))]);
                for await (const file of acceptedFiles) {
                    const formData = new FormData();
                    formData.append('file', file);
                    const resp = await fetch('/file-upload', {
                        method: 'POST',
                        body: formData
                    });
                    const url = await resp.text();
                    if (uploadsUrl.includes(url)) {
                        continue;
                    }
                    setUploadUrls((prev) => ([...prev, url]));
                }

            }
        });

    useEffect(() => {
        setProposalForm(prev => ({ ...prev, "uploads": [...uploadsUrl] }))
    }, [uploadsUrl, setProposalForm]);

    useEffect(() => {
        empty && setFiles([]);
        empty && setUploadUrls([]);
    }, [empty]);

    const thumbs = files.map(file => {
        return (
            file.type.startsWith('image') ? (
                <div style={thumb} key={file.name}>
                    <div style={thumbInner}>
                        <img
                            src={file.preview}
                            alt={file.name}
                            style={imgStyles}
                        />
                    </div>
                </div>) : (
                    <div style={thumb} key={file.name} >
                        <div style={thumbInner} >
                            <div style={{
                                background: 'grey',
                                display: "flex",
                                flexDirection: 'column',
                                alignItems: "center",
                                justifyContent: 'center',
                                padding: '20%',

                            }}>
                                <br />
                                <span> {file.name.substring(0, 5) + '..' + file.name.substring(file.name.length - 4)}</span>
                                <br />
                                <span> {(file.size / 1000000).toFixed(2) + ' MB'}</span>
                            </div>
                        </div>
                    </div>
                )

        )
    });

    // useEffect(() => () => {
    //     // Make sure to revoke the data uris to avoid memory leaks
    //     files.forEach(file => URL.revokeObjectURL(file.preview));
    // }, [files]);



    return (

        <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
            <input {...getInputProps()} />
            {files.length > 0 ? thumbs :
                (<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Icon className='large pink-text darken-1 center'>cloud_upload</Icon>
                    <br /> Сюда вы можете вложить или перетащить для наглядности фото, график или таблицу
                </div>
                )
            }
        </Container>

    );
}

