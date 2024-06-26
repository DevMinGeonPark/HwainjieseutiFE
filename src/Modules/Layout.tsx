import React from 'react';
import {View, Text, ScrollViewProps, ScrollView} from 'react-native';
import {Box} from 'native-base';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{flexGrow: 1}}>
      {children}
      <Footer />
    </ScrollView>
  );
};

export default Layout;

// import React from 'react';
// import {View, Text, FlatList, FlatListProps} from 'react-native';
// import {Box} from 'native-base';
// import Footer from './Footer';

// type LayoutProps = {
//   children: React.ReactNode;
// };

// const Layout: React.FC<LayoutProps> = ({children}) => {
//   return (
//     <FlatList
//       data={[children]}
//       keyExtractor={(item, index) => index.toString()}
//       contentContainerStyle={{flexGrow: 1}}
//       ListFooterComponent={<Footer />}
//       renderItem={({item}) => <>{item}</>}
//       style={{backgroundColor: 'white'}}
//     />
//   );
// };

// export default Layout;
