import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react'
import React from 'react'

type Props = {}

const Task = (props: Props) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Завдання</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Розробити сервіс для обчислення  кількості пар однакових сусідніх елементів у двовимірному масиві. В якості сусідніх можуть виступати як елементи, що знаходяться в одному стовпчику так і елементи, що знаходяться в одному рядку.
            </IonCardContent>
        </IonCard>
    )
}

export default Task