import { ButtonCustom } from "@/src/components/buttonCustom"
import { Text, View } from "react-native"

export const InputScreen = () => {
    return(
      <View>
        <Text>Hellow world</Text>
        <ButtonCustom titleButton="Cadastrar" />
        <ButtonCustom 
          titleButton="Entrar" 
          styleContainer={{backgroundColor: "#F545F5" }} 
          styleText={{color: "#FFF"}}
        />
      </View>
    )
}
