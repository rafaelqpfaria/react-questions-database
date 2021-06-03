import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MultilineTextFields from './MultilineTextFields'

export default function FormDialog({tryOpen, tryOpenModal}) {
  const [open, setOpen] = React.useState(false);

 
  const handleClose = () => {
    tryOpenModal()  
  };
  

  return (
    <div>
      
      <Dialog open={tryOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Inclua seu item</DialogTitle>
        <DialogContent>
          <DialogContentText>            
            Coloque os itens da sua questao aqui.
          </DialogContentText>
          <MultilineTextFields/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
   
    </div>
  );
}