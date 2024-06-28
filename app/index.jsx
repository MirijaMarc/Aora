import { Redirect, router } from "expo-router";
import {  Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App(){
    return(
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height : '100%'}}>
                <View className= "w-full items-center min-h-[85vh] px-4">
                    <Image 
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.cards}
                        resizeMode="contain"
                        className="max-w-[380px] w-full h-[300px]"
                     />

                     <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">Découvre des possibilités infinies avec <Text className="text-secondary-200">Aora</Text></Text>
                     </View>


                      <Text className="text-sm mt-7 text-gray-100 text-center">Quand la créativité rencontre l'innovation: embarquons dans une journée d'expolation avec Aora</Text>
                      <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('sign-in')}
                        containerStyles={"w-full mt-7"}
                       />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


