import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Disciplines from './Disciplines'
import RadioButtonsGroup from './Radio'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Displina"
          placeholder="Selecione a disciplina"
          select
          variant="outlined"
        >
          {Disciplines().map((item) => (
            <MenuItem key={item.label} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Tema"
          placeholder="Selecione um tema"
          multiline
          variant="outlined"
        />
      </div>
      <div>
        <label className="form-label"></label>
        <input type="file" accept="application/pdf" />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Conteúdo"
          multiline
          rows={4}
          placeholder="Digite o texto"
          variant="outlined"
        />
      </div>
      <div>
        <RadioButtonsGroup />
      </div>
    </form>
  );
}
