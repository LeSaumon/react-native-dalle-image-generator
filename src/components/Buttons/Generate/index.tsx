import React, {Button} from 'react-native';

type Props = {
  color: string;
  title: string;
  onPress: () => void;
};

const ButtonGenerate = (props: Props) => {
  return <Button {...props} />;
};

export default ButtonGenerate;
