import React, {SetStateAction, useState} from 'react';
import {SafeAreaView, Image} from 'react-native';
import {checkMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {request, requestMultiple, Permission} from 'react-native-permissions';
import {OPENAI_API_KEY} from '@env';
import LayoutSheet from './src/styles/Layout';
import {ImageSheet} from './src/styles/Image';
import {AxiosResponse} from 'axios';

import TextPrompt from './src/components/TextPrompt';
import ButtonGenerate from './src/components/Buttons/Generate';

const App = () => {
  const [textData, setTextData] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');

  const processPermissions = async () => {
    const status = await checkMultiple([
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]);
    const missingPermissions = Object.keys(status).filter(
      key => status[key as keyof typeof status] !== RESULTS.GRANTED,
    );
    if (
      typeof missingPermissions !== 'undefined' &&
      missingPermissions.length !== 0
    ) {
      const isMultiple =
        typeof missingPermissions[Symbol.iterator] === 'function';

      if (isMultiple) {
        requestMultiple(missingPermissions as Permission[]);
      } else {
        request(missingPermissions[0] as Permission);
      }
    } else {
      console.log('coucou');
      fetchData();
    }
  };

  const fetchData = () => {
    fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: textData,
        size: '256x256',
        n: 1,
      }),
    })
      .then(result => result.json())
      .then(data => {
        console.log(data);
        console.log(data.data[0].url);
        setGeneratedImage(data.data[0].url);
      });
  };

  return (
    <SafeAreaView style={LayoutSheet.flexContainer}>
      <TextPrompt value={textData} onChangeText={setTextData} />
      {generatedImage ? (
        <Image
          style={ImageSheet.generatedImage}
          source={{uri: generatedImage}}
        />
      ) : (
        <></>
      )}
      <ButtonGenerate
        color="#777"
        title="Generer mon image"
        onPress={processPermissions}
      />
    </SafeAreaView>
  );
};

export default App;
