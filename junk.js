// class CP1Screen extends React.Component {
//     static navigationOptions = {
//     };

//     render() {
//       return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require('../../assets/favicon.png')}
//             />
//             <Text
//                 style={styles.text}
//             > In this section, you will be asked different questions which help us personalize your experience further
//             </Text>
//         </View>
//       );
//     }
// }

// const CareerProfileStack = createStackNavigator({
//     CareerProfile: CareerProfileScreen
// },{
//     defaultNavigationOptions: {
//       title: 'Career Profile',
//       headerStyle: {
//         backgroundColor: 'darkslategrey'
//       },
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: "yellow",
//       },
//       headerTitleAlign: 'center'
//     },
// });

<div className='careerprofile__wrapper__header'>
  <span
    style={{ fontSize: "17px", fontWeight: "bolder" }}
    className='careerprofile__wrapper__header__header1'
  >
    In this section, you will be asked different questions which help us
    personalize your experience further.{" "}
    <b>
      Please note that we do not share any of the responses you give in this
      section with the employers
    </b>
    . This section is completely to analyse you for better career planning and
    this section directly impacts the Career Insights Section and all your
    recommendations. Please,
    <b> it is recommended to be honest and answer these questions seriously</b>
  </span>
  <br />
  <ul
    className='careerprofile__wrapper__header__header1'
    style={{ fontSize: "18px", marginLeft: "15px" }}
  >
    <li>There are 4 sections</li>
    <li>
      You won't be able to edit your response later, hence start only when you
      are free.{" "}
    </li>
    <li>
      Total time needed: 25-30 minutes. You can attempt different sections at
      different times.
    </li>
  </ul>
</div>;
<div
  style={{
    display: "flex",
    flex: 1,
    width: "60%",
    marginLeft: "20%",
  }}
>
  {renderTestsStatus(testsStatus)}
</div>;
<button
  className='button'
  onClick={() => startTest(testsStatus)}
  style={{
    display: "flex",
    flex: 1,
    marginTop: "5%",
    width: "60%",
    justifyContent: "center",
    marginLeft: "20%",
  }}
>
  <div className='text'>{pageVisit(testsStatus)}</div>
</button>;
