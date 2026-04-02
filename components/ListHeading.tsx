import { Text, TouchableOpacity, View } from 'react-native'

const ListHeading = ({ title }: ListHeadingProps) => {
    return (
        <View className="list-head">
            <Text className="list-title font-sans-bold">{title}</Text>

            <TouchableOpacity className="list-action">
                <Text className="list-action-text font-sans-semibold">View all</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListHeading
