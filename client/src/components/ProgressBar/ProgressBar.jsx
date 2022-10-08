import React, { useState } from 'react';

import { View } from 'react-native';

const ProgressBar = ({
    percentage,
    height,
    backgroundColor,
    completedColor,
}) => {
    const [getPercentage, setPercentage] = useState(percentage);
    const [getheight, setHeight] = useState(height);
    const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
    const [getCompletedColor, setCompletedColor] = useState(completedColor);
    return (
        <View>
            <View style={{ justifyContent: 'center', position: 'relative', marginTop: 5 }}>
                <View
                    style={{
                        width: '100%',
                        height: getheight,
                        marginVertical: 10,
                        borderRadius: 5,
                        backgroundColor: getBackgroundColor,
                    }}
                />
                <View
                    style={{
                        width: getPercentage ? getPercentage : 0,
                        height: getheight,
                        marginVertical: 10,
                        borderRadius: 5,
                        backgroundColor: getCompletedColor,
                        position: 'absolute',
                    }}
                />
            </View>
        </View>
    );
};
export default ProgressBar;