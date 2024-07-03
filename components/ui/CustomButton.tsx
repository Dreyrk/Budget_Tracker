import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { CustomButtonProps } from "@/constants/types/props";

export default function CustomButton({ text, classes, variant, onPress, children }: CustomButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case "destructive":
        return styles.destructive;
      case "success":
        return styles.success;
      case "warning":
        return styles.warning;
      default:
        return styles.primary;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={[getButtonStyle(), classes]}>
      <Text style={styles.buttonText}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.global.button.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  destructive: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.global.button.destructive,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  success: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.global.button.success,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  warning: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.global.button.warning,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
