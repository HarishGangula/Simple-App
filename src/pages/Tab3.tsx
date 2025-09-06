import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonAlert
} from '@ionic/react';

const Tab3: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">Your Name</IonLabel>
            <IonInput
              value={name}
              placeholder="Enter your name"
              onIonInput={(e) => setName(e.detail.value!)}
            />
          </IonItem>
          
          <IonButton 
            expand="block" 
            fill="solid" 
            className="ion-margin-top"
            onClick={() => setShowAlert(true)}
            disabled={!name.trim()}
          >
            Save Settings
          </IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Settings Saved"
          message={`Hello ${name}! Your settings have been saved.`}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;