import {Dispatch, SetStateAction} from 'react';
import React, {View, TextInput} from 'react-native';

import ComponentSheet from '../../styles/Components';

type Props = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const TextPrompt = (props: Props) => {
  return (
    <View>
      <TextInput
        style={ComponentSheet.textInput}
        placeholder="What you want to generate"
        {...props}
      />
    </View>
  );
};

export default TextPrompt;
