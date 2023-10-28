import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: 'black'
    },
    bold: {
        fontWeight: "bold"
    },
    white: {
        color: 'white'
    },
    big: {
        fontSize: 20
    },
    xl: {
        fontSize: 24
    },
    medium: {
        fontSize: 16
    },
    blue:{
        color: '#0871a8'
    },
    center: {
        textAlign: 'center'
    }
})

interface props{
    bold?: boolean,
    white?: boolean,
    big?: boolean,
    medium?: boolean,
    blue?: boolean,
    center?: boolean,
    xl?: boolean
    children: JSX.Element
}

const StyledText: React.FC<props> = ({ bold, white, big, medium, blue, center, children, xl }) => {
    const textStyles = [
        styles.text,
        bold && styles.bold,
        white && styles.white,
        big && styles.big,
        medium && styles.medium,
        blue && styles.blue,
        center && styles.center,
        xl && styles.xl
    ]

    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}

export default StyledText