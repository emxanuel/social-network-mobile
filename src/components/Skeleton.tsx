import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import { Skeleton } from '@rneui/themed'

interface IProps {
    type: 'chat' | 'contacts'
}

const CSkeleton: React.FC<IProps> = ({ type }) => {
    switch (type) {
        case 'chat':
            return (
                <View>
                    <Skeleton
                        width={Dimensions.get('window').width - 100}
                        height={70}
                        style={styles.right}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 200}
                        height={40}
                        style={styles.right}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 150}
                        height={40}
                        style={styles.left}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 120}
                        height={90}
                        style={styles.right}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 100}
                        height={150}
                        style={styles.left}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 130}
                        height={90}
                        style={styles.right}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 100}
                        height={40}
                        style={styles.right}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 140}
                        height={40}
                        style={styles.left}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 100}
                        height={40}
                        style={styles.right}
                    />
                    <Skeleton
                        width={Dimensions.get('window').width - 100}
                        height={80}
                        style={styles.left}
                    />
                </View>
            )
        case 'contacts':
            return (
                <View style={{
                    marginBottom: 10
                }}>
                    <Skeleton
                        width={Dimensions.get('window').width}
                        height={30}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}>
                        <Skeleton
                            width={150}
                            height={20}
                        />
                        <Skeleton
                            width={100}
                            height={20}
                        />
                    </View>
                </View>
            )
    }

}

export default CSkeleton

const styles = StyleSheet.create({
    container: {
        gap: 2
    },
    right: {
        alignSelf: 'flex-end',
        marginVertical: 7,
        borderRadius: 20
    },
    left: {
        alignSelf: 'flex-start',
        marginVertical: 7,
        borderRadius: 20
    }
})