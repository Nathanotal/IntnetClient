import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Inp from "../Komponenter/StandardInput";
import Knapp from "../Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";

const validate = Yup.object().shape({
  // Matches() (regex)
  namn: Yup.string().required().label("Användarnamn"),
  email: Yup.string().required().email().label("Email"),
  pass: Yup.string().required().min(3).label("Password"),
});

// Fixa detta när du kan mer React
// "Profil"
function createUser(funk, values) {
  fetch("https://127.0.0.1:8001/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: { username: values.namn, password: values.pass, email: values.email },
  })
    .then((response) => {
      console.log(response);
      if (true) {
        // Kolla att det funkade
        funk("Profil");
      } else {
        console.log("Gick inte att skapa ny användare");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function RegistreringsSkarm({ navigation, funk }) {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{ namn: "", email: "", pass: "" }}
        onSubmit={(values) => {
          // console.log(values);
          var n = values.namn;
          var e = values.email;
          var p = values.pass;
          console.log(values);
          createUser(funk, values);

          // Här kan vi lägga in registrering i databas
        }}
        validationSchema={validate}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.infoRuta}>
            <Knapp namn="Back" onPress={() => funk("Login")}></Knapp>
            <Inp
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={handleChange("namn")}
              onBlur={() => setFieldTouched("namn")}
            />
            {touched.namn && errors.namn && (
              <Text style={styles.feltext}>{errors.namn}</Text>
            )}
            <Inp
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && errors.email && (
              <Text style={styles.feltext}>{errors.email}</Text>
            )}
            <Inp
              placeholder="Password"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("pass")}
              onBlur={() => setFieldTouched("pass")}
            />
            {touched.pass && errors.pass && (
              <Text style={styles.feltext}>{errors.pass}</Text>
            )}
            <Knapp namn="Register" onPress={handleSubmit}></Knapp>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoRuta: {
    // backgroundColor: "gray",
    padding: 10,
  },
  feltext: {
    color: "red",
    fontWeight: "600",
  },
});

export default RegistreringsSkarm;
