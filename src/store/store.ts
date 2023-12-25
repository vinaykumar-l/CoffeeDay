import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            CartPrice: 0,
            FavoriteList: [],
            CartList: [],
            OrderHistoryList: [],
        }), {
        name: "coffee-app",
        storage: createJSONStorage(() => AsyncStorage)
    }
    )
)