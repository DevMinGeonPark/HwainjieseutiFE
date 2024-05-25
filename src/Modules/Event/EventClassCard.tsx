// import {View, Text, useWindowDimensions} from 'react-native';
// import AutoHeightImage from 'react-native-auto-height-image';
// import React from 'react';
// import {EventClass} from '@src/Types/EventDataTypes';
// import {VStack, Box, Pressable} from 'native-base';
// import {FontHeading} from '@src/Atomic/FontHeading';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {StackScreenProps} from '@Types/NavigationTypes';

// const EventClassCard = ({
//   EventClassImg,
//   EventSubject,
//   EventClassCode,
// }: EventClass) => {
//   const width = useWindowDimensions().width;
//   const [height, setHeight] = React.useState<number>(0);
//   const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

//   return (
//     <Pressable
//       px={1}
//       py={1}
//       onPress={() => {
//         navigation.navigate('EventList', {
//           EventClassCode: EventClassCode,
//           EventPage: 1,
//           LogInID: 'web366',
//         });
//       }}>
//       <Box>
//         <AutoHeightImage
//           onHeightChange={height => {
//             setHeight(height);
//           }}
//           width={width / 2 - 12}
//           source={{uri: EventClassImg}}
//         />
//       </Box>
//       <Box bg="#f4f4f4" px={3} py={4}>
//         <FontHeading fontSize={16}>{EventSubject}</FontHeading>
//       </Box>
//     </Pressable>
//   );
// };

// export default EventClassCard;
