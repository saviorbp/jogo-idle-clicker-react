import './rodape.css';
import Loja from '../loja/loja.js'
import Status from '../status/status.js';

export default function Rodape(props) {
    return (
        <footer className='Rodape'>
            <Loja />
            <Status estoque={props.estoque} transacoes={props.transacoes} processos={props.processos} />
        </footer>
    );
}
