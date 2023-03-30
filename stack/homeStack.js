import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ReviewEintraege from "../screens/reviewEintraege";
import TagReviewCard from "../components/TagReviewCard";
import ReisenScreen from "../screens/ReisenScreen";
import SettingScreen from "../screens/SettingScreen";
import ListenScreen from "../screens/ListenScreen";
import TaskItems from "../screens/TaskItems";
import UploadImage from "../screens/UploadImagee";
import Impressum from "../screens/Impressum";
import Datenschutzerklärung from "../screens/Datenschutz";
import Hintergrund from "../screens/Hintergrund";
import HelpCenter from "../screens/HelpCenter";
import Nutzungsbedingungen from "../screens/Nutzungsbedingungen";
import Accounteinstellungen from "../screens/AccountEinstellungen";
import tipp from "../screens/tipp";
Nutzungsbedingungen;
const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "",
    },
  },

  tipp: {
    screen: tipp,
    navigationOptions: { title: "" },
  },

  HelpCenter: {
    screen: HelpCenter,
    navigationOptions: { title: "" },
  },

  Hintergrund: {
    screen: Hintergrund,
    navigationOptions: { title: "" },
  },

  Impressum: {
    screen: Impressum,
    navigationOptions: {
      title: "",
    },
  },
  reviewEintraege: {
    screen: ReviewEintraege,
    navigationOptions: {
      title: "",
      //headerStyle: { backgroundColor: "#eee" },
    },
  },
  reviewDay: {
    screen: TagReviewCard,
    navigationOptions: {
      title: "",
      //headerStyle: { backgroundColor: "#333" },
    },
  },

  settings: {
    screen: SettingScreen,
    navigationOptions: {
      title: "",
    },
  },

  image: {
    screen: UploadImage,
    navigationOptions: {
      title: "",
    },
  },

  Reisen: {
    screen: ReisenScreen,
    navigationOptions: {
      title: "",
    },
  },

  Listen: {
    screen: ListenScreen,
    navigationOptions: {
      title: "",
    },
  },

  ListeNeu: {
    screen: TaskItems,
    navigationOptions: {
      title: "",
    },
  },

  Accounteinstellungen: {
    screen: Accounteinstellungen,
    navigationOptions: {
      title: "",
    },
  },

  Datenschutzerklärung: {
    screen: Datenschutzerklärung,
    navigationOptions: {
      title: "",
    },
  },
  Nutzungsbedingungen: {
    screen: Nutzungsbedingungen,
    navigationOptions: { title: "" },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "white", height: 80 },
    headerTitleStyle: { alignSelf: "center" },
    headerTransparent: true,

    //headerBackImage:
  },
});

export default createAppContainer(HomeStack);
