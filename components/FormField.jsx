import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

export default function FormField({title, value, placeholder,handleChangeText, otherStyles, ...props}) {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="bg-black-100 w-full h-16 px-4 rounded-2xl focus:border-secondary focus:border-2 items-center flex-row">
        <TextInput
            value={value}
            className="flex-1 text-white font-psemibold"
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
         />

         {title == 'Password' && (
            <TouchableOpacity onPress={()=> setshowPassword(!showPassword)}>
                <Image
                    source={showPassword ? icons.eye : icons.eyeHide}
                    resizeMode='contain'
                    className="w-6 h-6"
                 />
            </TouchableOpacity>
         )}
      </View>
    </View>
  )
}