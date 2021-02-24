// import React from "react";
// import {
//   FlatList,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";

// import { client } from "./graphql/client";
// import { TopHeadlines } from "./graphql/queries";
// import { ArticleRow } from "./components/ArticleRow";

// const styles = StyleSheet.create({
//   headerText: {
//     color: "#ff8d01",
//     fontWeight: "bold",
//     fontSize: 40,
//     paddingHorizontal: 10,
//     marginBottom: 30,
//     marginTop: 10,
//   },
// });

// class App extends React.Component {
//   state = {
//     articles: [],
//     loading: true,
//   };

//   componentDidMount() {
//     this.requestTopHeadlines();
//   }

//   requestTopHeadlines = () => {
//     client
//       .query({
//         query: TopHeadlines,
//         variables: { category: "technology" },
//       })
//       .then((response) => {
//         console.log("response", response);
//         this.setState({
//           loading: response.loading,
//           articles: response.data.headlines.articles,
//         });
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   };

//   renderFooter = () => {
//     if (this.state.loading) {
//       return <ActivityIndicator size="large" />;
//     }

//     return null;
//   };

//   render() {
//     return (
//       <SafeAreaView>
//         <FlatList
//           data={this.state.articles}
//           ListHeaderComponent={
//             <Text style={styles.headerText}>Top Headlines</Text>
//           }
//           renderItem={({ item, index }) => (
//             <ArticleRow index={index} {...item} />
//           )}
//           keyExtractor={(item) => `${item.publishedAt}-${item.title}`}
//           ListFooterComponent={this.renderFooter()}
//         />
//       </SafeAreaView>
//     );
//   }
// }

// export default App;

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import menu from "./screens/menu";
import news from "./screens/news";

const MainStack = createStackNavigator({
  menu: {
    screen: menu,
    navigationOptions: {
      headerTitle: "News Category",
    },
  },
  news: {
    screen: news,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("text"),
    }),
  },
  // politics: {
  //   screen: index,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: navigation.getParam("title"),
  //     headerTintColor: "#fff",
  //     headerStyle: {
  //       backgroundColor: navigation.getParam("color"),
  //       borderBottomColor: navigation.getParam("color"),
  //     },
  //   }),
  // },
  // sports: {
  //   screen: index,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: navigation.getParam("title"),
  //     headerTintColor: "#fff",
  //     headerStyle: {
  //       backgroundColor: navigation.getParam("color"),
  //       borderBottomColor: navigation.getParam("color"),
  //     },
  //   }),
  // },
  // business: {
  //   screen: index,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: navigation.getParam("title"),
  //     headerTintColor: "#fff",
  //     headerStyle: {
  //       backgroundColor: navigation.getParam("color"),
  //       borderBottomColor: navigation.getParam("color"),
  //     },
  //   }),
  // },
  // technology: {
  //   screen: index,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: navigation.getParam("title"),
  //   }),
  // },
});

export default createAppContainer(MainStack);
