import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import Input from '../components/Input';
import Task from '../components/Task';
import _debounce from 'lodash/debounce';
import './Home.css';
import { findPairs } from '../services/findPairs';

let matr: number[][];


const Home: React.FC = () => {
  const [size, setSize] = useState<number>();

  const setsize = (inputN: React.RefObject<HTMLIonInputElement>) => {
    let size = inputN.current!.value as number
    setSize(+size);

    matr = new Array(size); // create an empty array of length n
    for (var i = 0; i < size; i++) {
      matr[i] = new Array(size); // make each element an array
    }

  }

  const setmatrix = (e: any, i: number, j: number) => {
    console.log('here')
    matr[i][j] = e.target.value;
    console.log(matr)
  }

  const setResult = (count: number) => {
    let content = document.getElementById('result');
    content!.innerText = `Кількість однакових пар  - ${count}`

  }

  const find = () => {
    let count = findPairs(matr)

    setResult(count)
  }

  return (
    <>
      <Header />
      <Task />
      <Input size={size} setsize={setsize} setmatrix={setmatrix} />

      <IonButton disabled={size ? false : true} expand="block" onClick={find}>find</IonButton>


      <IonContent>
        <IonCard>
          <IonCardContent id="result">
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Home;
