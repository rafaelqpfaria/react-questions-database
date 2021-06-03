import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Tipo de Questão</FormLabel>
                <RadioGroup aria-label="Tipo" name="Tipo" value={value} onChange={handleChange}>
                    <FormControlLabel value='Cespe' control={<Radio />} label="Cespe" />
                    <FormControlLabel value='ME'control={<Radio />} label="Multipla Escolha" />
                </RadioGroup>
            </FormControl>
            {value == 'Cespe' &&
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Item"
                        placeholder="Digite o texto do item"
                        multiline
                        variant="outlined"
                    />
                </div>
            }
            {value == 'ME' &&
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="A"
                        placeholder="Digite o texto do item"
                        multiline
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-textarea"
                        label="B"
                        placeholder="Digite o texto do item"
                        multiline
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-textarea"
                        label="C"
                        placeholder="Digite o texto do item"
                        multiline
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-textarea"
                        label="D"
                        placeholder="Digite o texto do item"
                        multiline
                        variant="outlined"
                    />
                </div>
            }
        </>
    );
}