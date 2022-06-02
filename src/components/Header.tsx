import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonThumbnail, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

export default function Header() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Григор'єв Арсентій КН-32</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}