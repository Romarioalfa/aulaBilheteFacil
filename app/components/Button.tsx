import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    texto: string;
    quandoClicar: () => void;
    variant?: "default" | "danger";
    icons?: FontAwesomeIconProps["icon"] | FontAwesomeIconProps["icon"][];
};

export default function Button({
    texto,
    quandoClicar,
    variant = "default"
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                style.botao,
                variant === "danger" && style.botaoDanger
            ]}
            onPress={quandoClicar}
            activeOpacity={0.7}
        >
            <Text
                style={[
                    style.textoBotao,
                    variant === "danger" && style.textoDanger
                ]}
            >
                {texto}
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    botao: {
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: "center",
    },
    textoBotao: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 14,
    },
    botaoDanger: {
        backgroundColor: "#f9262d",
    },
    textoDanger: {
        color: "#ffffff",
    }
});