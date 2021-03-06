import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Inp from "../Komponenter/StandardInput";
import Knapp from "../Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";

// variable to keep track of if you should log in
var login = true;

const validate = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  pass: Yup.string().required().label("Password"),
});

function createUser(funk, values) {
  fetch("https://127.0.0.1:8001/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: { username: values.username, password: values.pass },
  })
    .then((response) => {
      console.log(response);
      if (true) {
        // Kolla att det funkade
        funk("Profil");
      } else {
        // Hantera misslyckad inloggning
        console.log("Inloggning misslyckades");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// This can be made much better with a useState Hook, but it works so I will focus on other things
function LoginSkarm({ navigation, funk }) {
  return (
    <SafeAreaView>
      <Text style={styles.rubrik}>Välkommen</Text>
      <Formik
        initialValues={{ username: "", pass: "" }}
        onSubmit={async (values) => {
          createUser(funk, values);
        }}
        validationSchema={validate}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.infoRuta}>
            <Inp
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={handleChange("username")}
              onBlur={() => setFieldTouched("username")}
            />
            {touched.username && errors.username && (
              <Text style={styles.feltext}>{errors.username}</Text>
            )}
            <Inp
              placeholder="Lösenord"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("pass")}
              onBlur={() => setFieldTouched("pass")}
            />
            {touched.pass && errors.pass && (
              <Text style={styles.feltext}>{errors.pass}</Text>
            )}
            <Knapp namn="Login" onPress={handleSubmit}></Knapp>
            <View style={styles.registerBox}>
              <Text style={styles.infoText}>No Account?</Text>
              <Knapp namn="Register" onPress={() => funk("Register")}></Knapp>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoRuta: {
    alignItems: "center",
    margin: 10,
    flexDirection: "column",
  },
  registerBox: {
    alignSelf: "flex-start",
    alignSelf: "center",
    marginTop: "70%",
  },
  infoText: {
    alignSelf: "center",
  },
  // rubrik: {
  //   padding: 20,
  //   fontWeight: "bold",
  //   fontSize: 30,
  //   alignSelf: "center",
  //   paddingTop: 40,
  //   paddingBottom: 10,
  // },
  rubrik: {
    fontSize: 50,
    fontWeight: "700",
  },
  feltext: {
    color: "red",
    fontWeight: "600",
  },
});

export default LoginSkarm;
