import { Spin } from 'antd';
import React from 'react';

const Loader = () => {
    const contentStyle = {
        padding: 50,
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 4,
      };
      
      const content = <div style={contentStyle} />;
    return (
        <div>
            <Spin size="large">
                {content}
            </Spin>
        </div>
    );
};

export default Loader;
// tip="Loading" 