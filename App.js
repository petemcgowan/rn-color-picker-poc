import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ExampleUncontrolledVertical } from "./components/ExampleUncontrolledVertical";
import { ExampleControlledVertical } from "./components/ExampleControlledVertical";
import { ExampleControlledTriangle } from "./components/ExampleControlledTriangle";
import { ExampleUncontrolledTriangle } from "./components/ExampleUncontrolledTriangle";

const examples = [
  {
    Component: ExampleUncontrolledVertical,
    title: "Uncontrolled vertical picker",
  },
  { Component: ExampleControlledVertical, title: "Controlled vertical picker" },
  {
    Component: ExampleUncontrolledTriangle,
    title: "Uncontrolled triangle picker",
  },
  { Component: ExampleControlledTriangle, title: "Controlled triangle picker" },
];

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { example: null };
  }

  onColorChange(color) {
    this.setState({ color });
  }

  render() {
    const { example } = this.state;
    if (example) {
      const { Component } = example;
      return <Component />;
    }
    return (
      <View style={styles.container}>
        {examples.map((example) => (
          <TouchableOpacity
            key={example.title}
            style={styles.touchable}
            onPress={() => this.setState({ example })}
          >
            <Text style={styles.text}>{example.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    backgroundColor: "#212021",
  },
  touchable: {
    padding: 5,
  },
  text: {
    color: "white",
  },
});

export default App;
