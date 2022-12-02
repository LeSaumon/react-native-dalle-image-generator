import React, {ActivityIndicator} from 'react-native';

type Props = {
  size: number | 'small' | 'large' | undefined;
  color: string;
};

const ImageLoader = (props: Props) => {
  const {size, color} = props;
  return <ActivityIndicator size={size} color={color} />;
};

export default ImageLoader;
