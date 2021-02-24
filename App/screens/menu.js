import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Business"
      color="#F8B195"
      onPress={() =>
        navigation.navigate("news", {
          text: "Business",
        })
      }
    />
    <RowItem
      name="Technology"
      color="#F67280"
      onPress={() =>
        navigation.navigate("news", {
          text: "Technology",
        })
      }
    />
    <RowItem
      name="Sports"
      color="#C06C84"
      onPress={() =>
        navigation.navigate("news", {
          text: "Sports",
        })
      }
    />
    <RowItem
      name="Entertainment"
      color="#6C5B7B"
      onPress={() =>
        navigation.navigate("news", {
          text: "Entertainment",
        })
      }
    />
    <RowItem
      name="Politics"
      color="#355C7D"
      onPress={() =>
        navigation.navigate("news", {
          text: "politics",
        })
      }
    />
  </ScrollView>
);
