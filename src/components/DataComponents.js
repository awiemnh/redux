    import React, { useEffect} from 'react';
    import { View, Text} from 'react-native';
    import { useDispatch, useSelector } from 'react-redux';
    import { fetchData } from '../actions/dataActions';
    const DataComponent = () => {
        const dispatch = useDispatch();
        const data = useSelector((state) => state.data.data);
        const error = useSelector((state) => state.data.error);
        useEffect(() => {
            dispatch(fetchData());
        }, [dispatch]);
        return (
            <view>
                {error && <Text>Error: {error}</Text>}
                {data.length >0 ?(
                    <view>
                        {data.map((item) => (
                            <text key={item.id} > {item.name}</text>
                        ))}
                        </view>
                ) : (
                    <text>Loading data...</text>
                ) }
        
            </view>
        );
        };

        export default DataComponent;