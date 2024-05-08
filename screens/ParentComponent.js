// // Parent component that contains both Loginscreen and Footer
// import React, { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Loginscreen from './Loginscreen';
// import Footer from './Footer';

// const ParentComponent = () => {
//   const [userRole, setUserRole] = useState(null);

//   // Function to set userRole after successful login
//   const handleLoginSuccess = (role) => {
//     setUserRole(role);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Loginscreen component */}
//       <Loginscreen onLoginSuccess={handleLoginSuccess} />

//       {/* Render Footer only if userRole is set */}
//       {userRole && <Footer userRole={userRole} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default ParentComponent;
