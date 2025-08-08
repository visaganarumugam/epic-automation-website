import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function FirestoreTest() {
  const [testResult, setTestResult] = useState<string>('Testing...');

  useEffect(() => {
    const testFirestore = async () => {
      try {
        console.log('Testing Firestore connection...');
        
        // Test write
        const docRef = await addDoc(collection(db, 'test'), {
          test: true,
          timestamp: new Date()
        });
        console.log('Test document written with ID:', docRef.id);
        
        // Test read
        const querySnapshot = await getDocs(collection(db, 'test'));
        console.log('Test documents found:', querySnapshot.size);
        
        setTestResult('✅ Firestore is working!');
      } catch (error) {
        console.error('Firestore test failed:', error);
        setTestResult(`❌ Firestore error: ${error}`);
      }
    };

    testFirestore();
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      padding: '10px', 
      border: '1px solid #ccc',
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      {testResult}
    </div>
  );
} 