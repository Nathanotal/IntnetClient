import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Inp from "../Komponenter/StandardInput";
import Knapp from "../Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";

const validate = Yup.object().shape({
  // Matches() (regex)
  title: Yup.string().required().label("title"),
  body: Yup.string().required().label("Beskrivning"),
  price: Yup.string().required().label("Pris"), // Skulle kunna kontrollera att det endast är nummer
});

function add(values) {
  // Skicka ny post till servern
  fetch("https://127.0.0.1:8001/api/postAd", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: values,
  })
    .then((response) => console.log(response))
    .catch((error) => {
      console.error(error);
    });
}

function checkLoggedIn(funk) {
  fetch("https://127.0.0.1:8001/api/getUserAds")
    .then((response) => response.json())
    .then((data) => funk(data.loggedin));
}

let ladda = true;

function Add(props) {
  const [isLoggedIn, setLoginStatus] = useState(false);
  useEffect(() => {
    if (ladda) {
      ladda = false;
      checkLoggedIn(setLoginStatus);
    }
  });

  return (
    <SafeAreaView>
      {isLoggedIn && (
        <div>
          <View style={styles.rubrikContainer}>
            <Text style={styles.rubrik}>Skapa ny annons</Text>
          </View>
          <Formik
            initialValues={{
              title: "",
              body: "",
              price: "",
            }}
            onSubmit={(values) => {
              add(values);

              // Här kan vi lägga in registrering i databas
            }}
            validationSchema={validate}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <View style={styles.infoRuta}>
                <Inp
                  placeholder="Titel för annons"
                  autoCapitalize="none"
                  onChangeText={handleChange("title")}
                  onBlur={() => setFieldTouched("title")}
                />
                {touched.title && errors.title && (
                  <Text style={styles.feltext}>{errors.title}</Text>
                )}
                <Inp
                  placeholder="Beskriv det du vill sälja"
                  autoCapitalize="none"
                  onChangeText={handleChange("body")}
                  onBlur={() => setFieldTouched("body")}
                />
                {touched.body && errors.body && (
                  <Text style={styles.feltext}>{errors.body}</Text>
                )}
                <Inp
                  placeholder="Sätt ett pris på varan"
                  autoCapitalize="none"
                  onChangeText={handleChange("price")}
                  onBlur={() => setFieldTouched("price")}
                />
                {touched.price && errors.price && (
                  <Text style={styles.feltext}>{errors.price}</Text>
                )}
                <Knapp namn="Register" onPress={handleSubmit}></Knapp>
              </View>
            )}
          </Formik>
        </div>
      )}
      {!isLoggedIn && (
        <Text style={styles.rubrik}>
          Du måste logga in för att kunna skapa en ny annons
        </Text>
      )}
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
  rubrik: {
    fontSize: 50,
    fontWeight: "700",
  },
});

export default Add;
