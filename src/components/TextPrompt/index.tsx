import {Dispatch, SetStateAction} from 'react';
import React, {View, TextInput} from 'react-native';

import ComponentSheet from '../../styles/Components';
import LayoutSheet from '../../styles/Layout';

type Props = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

const TextPrompt = (props: Props) => {
  return (
    <View>
      <TextInput
        style={ComponentSheet.textInput}
        placeholder="Write in plain english for the AI to understand what you want"
        {...props}
      />
    </View>
  );
};

export default TextPrompt;
