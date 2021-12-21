import React from 'react';

type ApiProps = {
    [keyof: string]: {
        desc?: string;
        required: boolean;
        
    };
};

interface StoryPageProps {
    children: React.ReactChild;
    name: string;
    apiProps: ApiProps;
}

const StoryPage = (props: StoryPageProps) => {
    const { name, apiProps } = props;

    return (
        <div>
            <div>cao</div>
        </div>
    );
};

export default StoryPage;
