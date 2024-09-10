import React, {useState} from 'react';
import styles from './styles/App.module.css';
import toto from './styles/Gg.module.css';

const App = () => {
    const [count, setCount] = useState(0);
    const gaf = ['az.PNG', 'qa.PNG'];
    const [may, setMay] = useState(0);
// пишем новый метод: в нем 2 метода обьединяем
    const one = () => {
        setCount(count + 1);
        setMay((may + 1) % 2);
    }

    return (
        <>
            <button className={toto.tap} onClick={() => one()}>
                Count is {count}
            </button>
            <img className={toto.pix} src={gaf[may]}
                 alt={"Sorry, the hamster died. To resurrect, try reload the page."}/>
        </>
    );
};

export default App;
