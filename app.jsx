import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

function App() {
  // Define state variable to store list of tasks
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Dynamically render tasks using map function */}
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
