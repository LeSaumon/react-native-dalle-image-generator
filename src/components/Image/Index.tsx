import React, {Image, TouchableOpacity} from 'react-native';

import {ImageSheet} from '../../styles/Image';

type Props = {
  imageUrl: string;
  onPress: () => void;
};

const ImageGenerated = (props: Props) => {
  const {imageUrl, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={ImageSheet.generatedImage} source={{uri: imageUrl}} />
    </TouchableOpacity>
  );
};

export default ImageGenerated;
