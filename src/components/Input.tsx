import { IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonText } from '@ionic/react'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import _debounce from 'lodash/debounce';
import {
    mixed,
    string,
    number,
    boolean,
    bool,
    date,
    object,
    array,
    ref,
    lazy,
} from 'yup';

import * as yup from 'yup';

type Props = {
    setsize: Function,
    setmatrix: Function,
    size: number | undefined
}

const Input = (props: Props) => {

    let { setsize, setmatrix, size } = props
    const [valid, setValid] = useState<boolean>(true);


    const inputN = useRef<HTMLIonInputElement>(null)

    const isValid = async (e: any) => {
        let schema = yup.number()
            .typeError('you must specify a number')
            .min(0, 'Min value 0.')
            .max(10, 'Max value 10.')
        let valid = await schema.isValid(e.target.value as number)

        setValid(valid)

        let b = valid;
    }

    useEffect(() => {

    })

    return (
        <>
            <IonItem>
                <IonLabel position="floating">
                    Enter N:
                </IonLabel>
                <IonInput color={valid ? '' : 'danger'} type="number" ref={inputN} onIonChange={(e) => isValid(e)} />
                {!valid && <IonText color="danger">Enter valid size of array</IonText>}
            </IonItem>
            <IonButton disabled={!valid} expand="block" onClick={() => setsize(inputN)}>set size</IonButton>
            <IonGrid>
                {size &&
                    Array(size).fill(Array(size).fill(0)).map((row, i) => {
                        return (
                            <IonRow key={Math.floor(Math.random() * 40)}>
                                {
                                    row.map((col: number, j: number) => {
                                        return (
                                            <IonCol key={i + j * Math.random()}>
                                                <IonItem>
                                                    <IonInput debounce={300} onIonChange={(e) => setmatrix(e, i, j)} />
                                                </IonItem>
                                            </IonCol>
                                        )
                                    })
                                }
                            </IonRow>
                        )
                    })
                }
            </IonGrid>

        </>
    )
}

export default Input