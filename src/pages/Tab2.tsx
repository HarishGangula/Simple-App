import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { checkmarkCircle, informationCircle, warningOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Features</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Features</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonList>
          <IonItem>
            <IonIcon icon={checkmarkCircle} color="success" slot="start" />
            <IonLabel>
              <h2>Ionic React</h2>
              <p>Built with the latest Ionic React framework</p>
            </IonLabel>
          </IonItem>
          
          <IonItem>
            <IonIcon icon={informationCircle} color="primary" slot="start" />
            <IonLabel>
              <h2>TypeScript Support</h2>
              <p>Full TypeScript support for better development experience</p>
            </IonLabel>
          </IonItem>
          
          <IonItem>
            <IonIcon icon={warningOutline} color="warning" slot="start" />
            <IonLabel>
              <h2>Cross-platform</h2>
              <p>Deploy to web, iOS, and Android with Capacitor</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;