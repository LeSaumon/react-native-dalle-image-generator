import React from 'react';

import HomePage from './src/screens/Home';

const App = () => {
  // const [textData, setTextData] = useState('');
  // const [generatedImage, setGeneratedImage] = useState('');
  // const [isGenerating, setIsGenerating] = useState(false);

  // const processPermissions = async () => {
  //   const status = await checkMultiple([
  //     PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  //     PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  //   ]);
  //   const missingPermissions = Object.keys(status).filter(
  //     key => status[key as keyof typeof status] !== RESULTS.GRANTED,
  //   );
  //   if (
  //     typeof missingPermissions !== 'undefined' &&
  //     missingPermissions.length !== 0
  //   ) {
  //     const isMultiple =
  //       typeof missingPermissions[Symbol.iterator] === 'function';

  //     if (isMultiple) {
  //       requestMultiple(missingPermissions as Permission[]);
  //     } else {
  //       request(missingPermissions[0] as Permission);
  //     }
  //   } else {
  //     console.log('coucou');
  //     fetchData();
  //     setIsGenerating(true);
  //   }
  // };

  // const fetchData = () => {
  //   fetch('https://api.openai.com/v1/images/generations', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${OPENAI_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       prompt: textData,
  //       size: '256x256',
  //       n: 1,
  //     }),
  //   })
  //     .then(result => result.json())
  //     .then(data => {
  //       setGeneratedImage(data.data[0].url);
  //       setIsGenerating(false);
  //     });
  // };

  return <HomePage />;
};

export default App;
