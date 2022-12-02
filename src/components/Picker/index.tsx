import React, {View} from 'react-native';
import {Dispatch, SetStateAction} from 'react';

import {Picker} from '@react-native-picker/picker';

type Props = {
  onValueChange: Dispatch<SetStateAction<string>>;
  selectedValue: string;
};

const FormatPicker = (props: Props) => {
  return (
    <View>
      <Picker {...props}>
        <Picker.Item label="Select a format" enabled={false} />
        <Picker.Item label="Small" value="256x256" />
        <Picker.Item label="Medium" value="512x512" />
        <Picker.Item label="Large" value="1024x1024" />
      </Picker>
    </View>
  );
};

export default FormatPicker;
