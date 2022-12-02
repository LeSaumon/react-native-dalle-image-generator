import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  checkMultiple,
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple,
  Permission,
} from 'react-native-permissions';

import LayoutSheet from '../../styles/Layout';

import TextPrompt from '../../components/TextPrompt';
import ButtonGenerate from '../../components/Buttons/Generate';
import ImageGenerated from '../../components/Image/Index';
import ImageLoader from '../../components/Loader';
import FormatPicker from '../../components/Picker';

import {OPENAI_API_KEY} from '@env';

const HomePage = () => {
  const [textData, setTextData] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('');

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
      console.log(selectedFormat);
      fetchData();
      setIsGenerating(true);
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
        size: selectedFormat,
        n: 1,
      }),
    })
      .then(result => result.json())
      .then(data => {
        setGeneratedImage(data.data[0].url);
        setIsGenerating(false);
      });
  };

  const saveGeneratedImage = () => {
  };

  return (
    <SafeAreaView style={LayoutSheet.flexContainer}>
      {/* Image */}
      {generatedImage ? (
        <ImageGenerated
          onPress={saveGeneratedImage}
          imageUrl={generatedImage}
        />
      ) : (
        <></>
      )}

      {/* Loader */}
      {isGenerating ? <ImageLoader size="large" color="#854123" /> : <></>}

      <View style={LayoutSheet.pushToBottom}>
        <ButtonGenerate
          color="#bb9457"
          title="Generer mon image"
          onPress={processPermissions}
        />
        <FormatPicker
          onValueChange={setSelectedFormat}
          selectedValue={selectedFormat}
        />
        <TextPrompt value={textData} onChangeText={setTextData} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
