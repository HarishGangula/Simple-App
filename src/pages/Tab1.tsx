import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to Simple App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This is an Ionic React application with a tabbed interface. 
            Navigate between tabs to explore different features.
          </IonCardContent>
        </IonCard>

        <div className="ion-padding">
          <IonButton expand="block" fill="solid" color="primary">
            Get Started
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;