import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: "5%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#C7DEF0",
    fontSize: 14,
    borderRadius: 8,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "Medium",
  },

  headline: {
    fontSize: 26,
    textAlign: "center",
    padding: "10%",
    fontFamily: "Medium",
  },

  headline2: {
    fontFamily: "Medium",
    fontSize: 20,
    padding: "5%",
  },

  headline3: {
    fontFamily: "Medium",
    fontSize: 15,
    padding: "5%",
  },

  impBold: {
    fontSize: 16,
    fontFamily: "Bold",
  },

  impHeadline: {
    fontSize: 20,
    fontFamily: "Medium",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  impLight: {
    fontSize: 16,
    fontFamily: "Regular",
  },

  addListe: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 150,
    height: 70,
    justifyContent: "center",
  },

  addEintrag: {
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    margin: 10,
    width: 305,
    height: 60,
    justifyContent: "center",
  },

  neu: {
    width: 30,
    height: 30,
    marginLeft: "85%",
    marginTop: "10%",
  },

  errorNachricht: {
    color: "crimson",
    fontWeight: "bold",
    textAlign: "center",
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconNavigator: {
    width: 30,
    height: 30,
  },

  ListenCard: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#DFF1FF",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 150,
    height: 70,
    justifyContent: "space-around",
    padding: 10,
  },

  HintergrundCard: {
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 7,
    marginVertical: 10,
    width: 150,
    height: 120,
    borderColor: "blue",
    borderWidth: 2,
  },

  ReiseCard: {
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#213049",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },

  Footer: {
    backgroundColor: "#DFF1FF",
    alignSelf: "stretch",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  WrapperForms: {
    backgroundColor: "#DFF1FF",
    borderRadius: 20,
    padding: "5%",
  },

  InputForms: {
    backgroundColor: "#C7DEF0",
    borderRadius: 10,
    padding: 7,
    margin: 7,
    borderColor: "#C7DEF0",
    fontFamily: "Medium",
    fontSize: 14,
    color: "#213049",
  },
  ButtonForms: {
    padding: 10,
    width: "50%",
    borderRadius: 40,
  },
  ButtonFlex: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "5%",
  },

  Opac: {
    backgroundColor: "#C7DEF0",
    borderRadius: 10,
    width: "40%",
    margin: "4%",
  },
  OpacText: {
    color: "#213049",
    padding: 10,
    fontSize: 14,
    textAlign: "center",
  },
});
